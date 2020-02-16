import React from 'react';
import { MyRatingsState } from './MyRatingsState';
import { MyRatingsProps } from './MyRatingsProps';
import { IDataService } from '../../../service/DataServiceInterfaces';
import { DataService } from '../../../service/DataService';
import { Configuration, SearchResults, Movie, Item, Result, RatedMovie } from '../../../model';
import { DialogProperties } from '../../../common/CommonInterfaces';
import Container from '@material-ui/core/Container';
import { StyledPaper } from '../../controls/styled/CommonComponents';
import SearchContentResults from '../../controls/SearchContentResults';
import ItemDetailDialog from '../../controls/ItemDetailDialog';
import { stringConstants } from '../../../common/StringConstants';

class MyRatings extends React.Component<MyRatingsProps, MyRatingsState> {
    dataService: IDataService;
    emptyConfiguration: Configuration = {
        images: {
            baseUrl: '',
            secureBaseUrl: '',
            backdropSizes: [],
            logoSizes: [],
            posterSizes: [],
            profileSizes: [],
            stillSizes: []
        },
        changeKeys: []

    }

    emptyDialogProps: DialogProperties = {
        loading: false,
        openDialog: false,
        dialogItem: undefined,
        genres: [],
        keywords: [],
        rating: 0,
        ratingMessage: ''
    };

    emptySearchResults: SearchResults = {
        page: 0,
        totalPages: 0,
        totalResults: 0,
        results: []
    };    
        
    constructor(props: MyRatingsProps) {
        super(props);
        this.dataService = new DataService();
        this.state = {
            configuration: this.emptyConfiguration,
            moviesGenres: [],
            searchResults: this.emptySearchResults,
            searchSortValue: '',
            imageUrl: '',
            imageUrlW185: '',
            dialogProps: this.emptyDialogProps
        }
    }
    async componentDidMount() {
        const conf: Configuration = await this.dataService.getConfiguration();
        const movieGenres: Item[] = await this.dataService.getGenres(stringConstants.apiEntities.movie);
        const secureUrl: string = conf.images.secureBaseUrl !== ''
                                ? conf.images.secureBaseUrl
                                : '';
        const imageUrl: string = secureUrl !== '' ? `${secureUrl}/${conf.images.posterSizes.w92}/` : '';
        const imageUrlW185: string = secureUrl !== '' ? `${secureUrl}/${conf.images.posterSizes.w185}/` : '';
        const searchMovieResults: SearchResults = await this.dataService.getAccountRatedMovies(1);

        this.setState({ 
            configuration: conf, 
            moviesGenres: movieGenres,
            searchResults: searchMovieResults, 
            imageUrl: imageUrl,
            imageUrlW185: imageUrlW185
        });
    }

    onClickSearch = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const searchMovieResults: SearchResults = 
            await this.dataService.searchMovies('Godfather', 1);
        this.setState(prevState => ({ ...prevState, searchResults: searchMovieResults }));        
    }

    handleLoadMoreResults = async () => {
        const stateMovieResults: Result[] = this.state.searchResults.results.slice();
        const searchMovieResults: SearchResults = 
            await this.dataService.getAccountRatedMovies(this.state.searchResults.page + 1);
        const sortedMovieResults = stateMovieResults.concat(searchMovieResults.results);
        this.setState(prevState => ({ ...prevState, searchResults: {
                        page: searchMovieResults.page,
                        totalPages: searchMovieResults.totalPages,
                        totalResults: searchMovieResults.totalResults,
                        results: sortedMovieResults
                    } 
        }));
    }

    handleClickCard = (id: string) => {
        const itemResult: Result = 
            this.state.searchResults.results.filter(item => item.id === +id)[0];

        let genres: string[] = [];
        if (itemResult.genreIds.length > 0) {
            genres = itemResult.genreIds.map(genreId => {
                    return this.state.moviesGenres.filter(item => item.id === genreId)[0].name;
            });
        }        

        this.setState(prevState => ({ ...prevState, 
            dialogProps: {
                ...prevState.dialogProps,
                loading: true,
                openDialog: true,
                dialogItem: itemResult,
                genres: genres
            }
        }));
    }

    handleDialogOk = (event: any) => {
        this.setState(prevState => ({ ...prevState, 
            dialogProps: {
                ...prevState.dialogProps,
                openDialog: false,
                rating: 0,
                ratingMessage: ''
            }
        }));        
    }

    handleEntered = async (event: any) => {
        if (this.state.dialogProps.dialogItem) {
            const keywords: Item[] = 
                await this.dataService.getKeywords(this.state.dialogProps.dialogItem.id.toString(), stringConstants.apiEntities.movie);
            let ratedMovie: RatedMovie | undefined = undefined;
            ratedMovie = await this.dataService.getRatedMovie(this.state.dialogProps.dialogItem.id.toString());
            this.setState(prevState => ({ ...prevState, 
                dialogProps: {
                    ...prevState.dialogProps,
                    loading: false, 
                    keywords: keywords,
                    rating: ratedMovie && ratedMovie.ratedValue ? ratedMovie.ratedValue : 0
                }
            }));
        }
    }    

    handleRating = async(event: React.ChangeEvent<{}>, newValue: number | null) => {
        if (this.state.dialogProps.dialogItem && newValue) {
            const response = 
                await this.dataService.rateMovie(this.state.dialogProps.dialogItem.id.toString(), newValue);
            let message: string = '';

            if (response.status_code === 1) {
                message = 'Rating done successfully!!';
            }
            if (response.status_code === 12) {
                message = 'Rating updated successfully!!';
            }
            if (message)
                this.setState(prevState => ({ ...prevState, 
                    dialogProps: {
                        ...prevState.dialogProps,
                        rating: newValue,
                        ratingMessage: message
                    }
                }));
        }
    }

    render() {    
        return (
            <Container>
                {this.state.searchResults.totalResults === 0 &&
                    <StyledPaper>No results</StyledPaper>
                }                
                {this.state.searchResults.totalResults > 0 &&
                    <SearchContentResults 
                        imageBaseUrl={this.state.imageUrl}
                        hasMoreItems={this.state.searchResults.page < this.state.searchResults.totalPages}
                        results={this.state.searchResults.results as Movie[]} 
                        loadResults={this.handleLoadMoreResults}
                        onClickCard={this.handleClickCard}
                        />
                }
                <ItemDetailDialog 
                    baseImageUrl={this.state.imageUrlW185}
                    openDialog={this.state.dialogProps.openDialog}
                    showBackdrop={this.state.dialogProps.loading}
                    dialogItem={this.state.dialogProps.dialogItem && this.state.dialogProps.dialogItem}
                    genres={this.state.dialogProps.genres}
                    keywords={this.state.dialogProps.keywords}
                    onEntered={this.handleEntered}
                    onClickDialogOk={this.handleDialogOk}
                    onChangeRating={this.handleRating}
                    ratingValue={this.state.dialogProps.rating}
                    ratingMessage={this.state.dialogProps.ratingMessage}
                    type={'Movies'}
                />                             
            </Container>
        );
    }
}

export default MyRatings;