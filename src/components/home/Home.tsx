import React from 'react';
import { HomeProps } from './HomeProps';
import { HomeState } from './HomeState';
import { IDataService } from '../../service/DataServiceInterfaces';
import { DataService } from '../../service/DataService';
import { Configuration, SearchResults } from '../../model';
import SearchMovieResults from '../common/SearchMovieResults';
import SearchDefinition from '../common/SearchDefinition';
import { HomeContainer } from '../common/styled/CommonComponents';

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
        movies: []
    };
    constructor(props: HomeProps) {
        super(props);
        this.dataService = new DataService();

        this.state = {
            configuration: this.emptyConfiguration,
            searchResults: this.emptySearchResults,
            searchDefinition: {
                value: '1',
                placeholderText: 'Search Movies in The Movie Database API'
            }
        }
    }

    async componentDidMount() {
        const conf: Configuration = await this.dataService.getConfiguration();
        const testSearch: SearchResults = await this.dataService.searchMovies('Avengers');
        this.setState({ configuration: conf, searchResults: testSearch });

    }

    handleChangeSearchType = (event: React.ChangeEvent<{ value: unknown }>) => {
        const { value, selectedOptions } = event.currentTarget as HTMLSelectElement;
        const newPlaceHolder = `Search ${selectedOptions[0].text} in The Movie Database API` ;
        this.setState(prevState => ({ 
                    ...prevState, 
                        searchDefinition: {
                            value: value, placeholderText:newPlaceHolder
                        } 
                    }));
    }

    render() {
        const secureUrl: string = this.state.configuration.images.secureBaseUrl !== ''
                                ? this.state.configuration.images.secureBaseUrl
                                : '';
        const imageUrl: string = secureUrl !== '' ? `${secureUrl}/${this.state.configuration.images.posterSizes.w92}/` : '';
        return (
            <HomeContainer>
                <SearchDefinition value={this.state.searchDefinition.value} 
                                  placeHolderText={this.state.searchDefinition.placeholderText}
                                  onChangeSearchType={this.handleChangeSearchType}
                />
                {this.state.searchResults.totalResults > 0 &&
                    <SearchMovieResults imageBaseUrl={imageUrl} movies={this.state.searchResults.movies} />
                }
            </HomeContainer>
        )
    }

}

export default Home;