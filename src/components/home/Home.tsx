import React from 'react';
import { HomeProps } from './HomeProps';
import { HomeState } from './HomeState';
import { IDataService } from '../../service/DataServiceInterfaces';
import { DataService } from '../../service/DataService';
import { Configuration, SearchResults, TvShow, Movie, Result, Item } from '../../model';
import SearchContentResults from '../common/SearchContentResults';
import SearchDefinition from '../common/SearchDefinition';
import { HomeContainer, StyledPaper } from '../common/styled/CommonComponents';
import ItemDetailDialog from '../common/ItemDetailDialog';
import { stringConstants } from '../../common/StringConstants';

class Home extends React.Component<HomeProps, HomeState>  {
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
    
    };
    emptySearchResults: SearchResults = {
        page: 0,
        totalPages: 0,
        totalResults: 0,
        results: []
    };
    constructor(props: HomeProps) {
        super(props);
        this.dataService = new DataService();

        this.state = {
            configuration: this.emptyConfiguration,
            moviesGenres: [],
            tvShowGenres: [],
            searchResults: this.emptySearchResults,
            searchDefinition: {
                searchTerm: '',
                searchTypeValue: 'Movies',
                placeholderText: 'Search Movies in The Movie Database API'
            },
            searchSortValue:'Title',
            dialogProps: {
                loading: false,
                openDialog: false,
                dialogItem: undefined,
                genres: [],
                keywords: []
            }
        }
    }

    async componentDidMount() {
        const conf: Configuration = await this.dataService.getConfiguration();
        const movieGenres: Item[] = await this.dataService.getGenres(stringConstants.apiEntities.movie);
        const tvShowGenres: Item[] = await this.dataService.getGenres(stringConstants.apiEntities.tv);
        this.setState({ 
            configuration: conf, 
            moviesGenres: movieGenres, 
            tvShowGenres: tvShowGenres 
        });
    }

    handleChangeSearchType = (event: any) => {
        const { value } = event.target;
        const newPlaceHolder = `Search ${value} in The Movie Database API` ;
        this.setState(prevState => ({ 
                    ...prevState, 
                        searchDefinition: { 
                            searchTerm: '',
                            searchTypeValue: value, 
                            placeholderText:newPlaceHolder
                        },
                        searchResults: {
                            page: 0,
                            totalPages: 0,
                            totalResults: 0,
                            results: []
                        }
                    }));
    }

    handleChangeSort = (event: any) => {
        const { value } = event.target;
        this.setState(prevState => ({ 
                    ...prevState, 
                    searchSortValue: value,
                    }));
    }    

    handleOnChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.currentTarget as HTMLInputElement;
        this.setState(prevState => ({ 
                    ...prevState, 
                        searchDefinition: { 
                            ...prevState.searchDefinition,
                            searchTerm: value
                        } 
                    }));        
    }

    sortResults = (results: Result[]) => {
        switch(this.state.searchSortValue) {
            case 'Title':
                results.sort((a, b) => {
                    if (a.title < b.title)
                        return -1;
                    if (a.title > b.title)
                        return 1;
                    return 0;
                });
                break;
            case 'Release date': 
                results.sort((a, b) => +a.releaseDate - +b.releaseDate);
                break;
            case 'Vote average':
                results.sort((a, b) => b.voteAverage - a.voteAverage);
                break;
            default:
                break;
        }
    }

    handleOnClickSearch = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        switch(this.state.searchDefinition.searchTypeValue) {
            case 'Movies':
                const searchMovieResults: SearchResults = 
                    await this.dataService.searchMovies(this.state.searchDefinition.searchTerm, 1);
                // searchMovieResults.results.sort((a, b) => +a.releaseDate - +b.releaseDate);
                this.sortResults(searchMovieResults.results);
                this.setState(prevState => ({ ...prevState, searchResults: searchMovieResults }));
                break;
            case 'TV Shows':
                const searchTvShowResults: SearchResults = 
                    await this.dataService.searchTvShows(this.state.searchDefinition.searchTerm, 1);
                this.sortResults(searchTvShowResults.results);
                this.setState(prevState => ({ ...prevState, searchResults: searchTvShowResults }));
                break;
            default:
                break;
        }
    }

    handleLoadMoreResults = async () => {
        switch(this.state.searchDefinition.searchTypeValue) {
            case 'Movies':
                const stateMovieResults: Result[] = this.state.searchResults.results.slice();
                const searchMovieResults: SearchResults = 
                    await this.dataService.searchMovies(this.state.searchDefinition.searchTerm, this.state.searchResults.page + 1);
                const sortedMovieResults = stateMovieResults.concat(searchMovieResults.results);
                this.sortResults(sortedMovieResults);
                this.setState(prevState => ({ ...prevState, searchResults: {
                                page: searchMovieResults.page,
                                totalPages: searchMovieResults.totalPages,
                                totalResults: searchMovieResults.totalResults,
                                results: sortedMovieResults
                            } 
                }));
                break;
            case 'TV Shows':
                const stateTvShowResults: Result[] = this.state.searchResults.results.slice();
                const searchTvShowResults: SearchResults = 
                    await this.dataService.searchTvShows(this.state.searchDefinition.searchTerm, this.state.searchResults.page + 1);
                    const sortedTvShowResults = stateTvShowResults.concat(searchTvShowResults.results);
                    this.sortResults(sortedTvShowResults);
                this.setState(prevState => ({ ...prevState, searchResults: {
                                page: searchTvShowResults.page,
                                totalPages: searchTvShowResults.totalPages,
                                totalResults: searchTvShowResults.totalResults,
                                results: sortedTvShowResults
                            } 
                }));
                break;
            default:
                break;
        }

    }

    handleClickCard = (id: string) => {
        const itemResult: Result = 
            this.state.searchResults.results.filter(item => item.id === +id)[0];

        let genres: string[] = [];
        switch (this.state.searchDefinition.searchTypeValue) {
            case 'Movies':
                if (itemResult.genreIds.length > 0) {
                        genres = itemResult.genreIds.map(genreId => {
                                return this.state.moviesGenres.filter(item => item.id === genreId)[0].name;
                        });
                }
                break;
            case 'TV Shows':
                if (itemResult.genreIds.length > 0) {
                        genres = itemResult.genreIds.map(genreId => {
                            return this.state.tvShowGenres.filter(item => item.id === genreId)[0].name;
                    });
                }
                break;
            default:
                break;
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
            }
        }));        
    }

    handleEntered = async (event: any) => {
        const type: string = this.state.searchDefinition.searchTypeValue === 'Movies'
                                ? stringConstants.apiEntities.movie
                                : stringConstants.apiEntities.tv;
        if (this.state.dialogProps.dialogItem) {
            const keywords: Item[] = 
                await this.dataService.getKeywords(this.state.dialogProps.dialogItem.id.toString(), type);
            this.setState(prevState => ({ ...prevState, 
                dialogProps: {
                    ...prevState.dialogProps,
                    loading: false, 
                    keywords: keywords
                }
            }));
        }
    }

    render() {
        const secureUrl: string = this.state.configuration.images.secureBaseUrl !== ''
                                ? this.state.configuration.images.secureBaseUrl
                                : '';
        const imageUrl: string = secureUrl !== '' ? `${secureUrl}/${this.state.configuration.images.posterSizes.w92}/` : '';
        const imageUrlW185: string = secureUrl !== '' ? `${secureUrl}/${this.state.configuration.images.posterSizes.w185}/` : '';
        return (
            <HomeContainer>
                <SearchDefinition searchTerm={this.state.searchDefinition.searchTerm} 
                                  searchTypeValue={this.state.searchDefinition.searchTypeValue} 
                                  placeHolderText={this.state.searchDefinition.placeholderText}
                                  onChangeSearchInput={this.handleOnChangeSearchInput}
                                  onChangeSearchType={this.handleChangeSearchType}
                                  onClickSearch={this.handleOnClickSearch}
                                  onChangeSort={this.handleChangeSort}
                                  searchSortValue={this.state.searchSortValue}
                />
                {this.state.searchResults.totalResults === 0 &&
                    <StyledPaper>No results</StyledPaper>
                }                
                {this.state.searchResults.totalResults > 0 &&
                    <SearchContentResults 
                        imageBaseUrl={imageUrl}
                        hasMoreItems={this.state.searchResults.page < this.state.searchResults.totalPages}
                        results={this.state.searchDefinition.searchTypeValue === '1'
                                    ? (this.state.searchResults.results as Movie[])
                                    : (this.state.searchResults.results as TvShow[])} 
                        loadResults={this.handleLoadMoreResults}
                        onClickCard={this.handleClickCard}
                        />
                }

                <ItemDetailDialog 
                    baseImageUrl={imageUrlW185}
                    openDialog={this.state.dialogProps.openDialog}
                    showBackdrop={this.state.dialogProps.loading}
                    dialogItem={this.state.dialogProps.dialogItem && this.state.dialogProps.dialogItem}
                    genres={this.state.dialogProps.genres}
                    keywords={this.state.dialogProps.keywords}
                    onEntered={this.handleEntered}
                    onClickDialogOk={this.handleDialogOk}
                />
            </HomeContainer>
        )
    }

}

export default Home;