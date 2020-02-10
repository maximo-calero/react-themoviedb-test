import React from 'react';
import { HomeProps } from './HomeProps';
import { HomeState } from './HomeState';
import { IDataService } from '../../service/DataServiceInterfaces';
import { DataService } from '../../service/DataService';
import { Configuration, SearchResults } from '../../model';

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
        const completeImageUrl: string = secureUrl !== '' ? `${secureUrl}/${this.state.configuration.images.posterSizes[4]}/${image}` : '';

        return (
            <div>
                {this.state.searchResults.totalResults > 0 &&
                    this.state.searchResults.movies.map(item => {
                        return (
                            <div key={item.id}>
                                <p >{item.title}</p>
                            </div>
                        );
                    })
                }
                <p>Images URL</p>
                {this.state.configuration.images.baseUrl !== '' &&
                    <img src={completeImageUrl} />
                }
            </div>
        )
    }

}

export default Home;