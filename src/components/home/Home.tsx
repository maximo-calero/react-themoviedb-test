import React from 'react';
import { HomeProps } from './HomeProps';
import { HomeState } from './HomeState';
import { IDataService } from '../../service/DataServiceInterfaces';
import { DataService } from '../../service/DataService';
import { Configuration, SearchResults } from '../../model';
import MediaCard from '../common/MediaCard';
import SearchMovieResults from '../common/SearchResults';

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
            searchResults: this.emptySearchResults
        }
    }

    async componentDidMount() {
        const conf: Configuration = await this.dataService.getConfiguration();
        const testSearch: SearchResults = await this.dataService.searchMovies('Godfather');
        this.setState({ configuration: conf, searchResults: testSearch });

    }

    render() {
        const image: string = '/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg';
        const baseUrl: string = this.state.configuration.images.baseUrl !== ''
                                ? this.state.configuration.images.baseUrl
                                : '';
        const secureUrl: string = this.state.configuration.images.secureBaseUrl !== ''
                                ? this.state.configuration.images.secureBaseUrl
                                : '';
        const completeImageUrl: string = secureUrl !== '' ? `${secureUrl}/${this.state.configuration.images.posterSizes.w154}/${image}` : '';
        const imageUrl: string = secureUrl !== '' ? `${secureUrl}/${this.state.configuration.images.posterSizes.w154}/` : '';
        return (
            <div>

                {this.state.searchResults.totalResults > 0 &&
                    <SearchMovieResults imageBaseUrl={imageUrl} movies={this.state.searchResults.movies} />
                }
            </div>
        )
    }

}

export default Home;