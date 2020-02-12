import React from 'react';
import { HomeProps } from './HomeProps';
import { HomeState } from './HomeState';
import { IDataService } from '../../service/DataServiceInterfaces';
import { DataService } from '../../service/DataService';
import { Configuration, SearchResults, TvShow, Movie } from '../../model';
import SearchContentResults from '../common/SearchContentResults';
import SearchDefinition from '../common/SearchDefinition';
import { HomeContainer, StyledPaper } from '../common/styled/CommonComponents';

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
            searchResults: this.emptySearchResults,
            searchDefinition: {
                searchTerm: '',
                searchTypeValue: 'Movies',
                placeholderText: 'Search Movies in The Movie Database API'
            }
        }
    }

    async componentDidMount() {
        const conf: Configuration = await this.dataService.getConfiguration();
        this.setState({ configuration: conf });
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

    handleOnClickSearch = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        switch(this.state.searchDefinition.searchTypeValue) {
            case 'Movies':
                const searchMovieResults: SearchResults = 
                    await this.dataService.searchMovies(this.state.searchDefinition.searchTerm);
                this.setState(prevState => ({ ...prevState, searchResults: searchMovieResults }));
                break;
            case 'TV Shows':
                const searchTvShowResults: SearchResults = 
                    await this.dataService.searchTvShows(this.state.searchDefinition.searchTerm);
                this.setState(prevState => ({ ...prevState, searchResults: searchTvShowResults }));
                break;
            default:
                break;
        }
        const searchResults: SearchResults = 
            await this.dataService.searchMovies(this.state.searchDefinition.searchTerm);
        this.setState(prevState => ({ ...prevState, searchResults: searchResults }));
    }

    render() {
        const secureUrl: string = this.state.configuration.images.secureBaseUrl !== ''
                                ? this.state.configuration.images.secureBaseUrl
                                : '';
        const imageUrl: string = secureUrl !== '' ? `${secureUrl}/${this.state.configuration.images.posterSizes.w92}/` : '';
        return (
            <HomeContainer>
                <SearchDefinition searchTerm={this.state.searchDefinition.searchTerm} 
                                  searchTypeValue={this.state.searchDefinition.searchTypeValue} 
                                  placeHolderText={this.state.searchDefinition.placeholderText}
                                  onChangeSearchInput={this.handleOnChangeSearchInput}
                                  onChangeSearchType={this.handleChangeSearchType}
                                  onClickSearch={this.handleOnClickSearch}
                />
                {this.state.searchResults.totalResults === 0 &&
                    <StyledPaper>No results</StyledPaper>
                }                
                {this.state.searchResults.totalResults > 0 &&
                    <SearchContentResults 
                        imageBaseUrl={imageUrl} 
                        results={this.state.searchDefinition.searchTypeValue === '1'
                                    ? (this.state.searchResults.results as Movie[])
                                    : (this.state.searchResults.results as TvShow[])} 
                        />
                }
            </HomeContainer>
        )
    }

}

export default Home;