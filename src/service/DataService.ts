import { IDataService } from "./DataServiceInterfaces";
import { Configuration, SearchResults } from "../model";
import { stringConstants } from "../common/StringConstants";

export class DataService implements IDataService {
    private apiUrl: string;
    private apiKey: string;

    constructor() {
        if (process.env.API_URL && process.env.API_KEY) {
            this.apiUrl = process.env.API_URL
            this.apiKey = process.env.API_KEY
        }else {
            throw new Error('API Url is not configured');
        }
    }

    private async getApiJson(entity: string, additionalParams?: string): Promise<any> {
        let url = additionalParams 
                    ? `${this.apiUrl}${entity}${stringConstants.params.apiKey}${this.apiKey}${additionalParams}`
                    : `${this.apiUrl}${entity}${stringConstants.params.apiKey}${this.apiKey}`;
        const response: Response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return await response.json();
    }

    public async getConfiguration(): Promise<Configuration> {
        const obj: any = await this.getApiJson(stringConstants.apiEntities.configuration)
        const configuration: Configuration = {
            images: {
                baseUrl: obj.images.base_url,
                secureBaseUrl: obj.images.secure_base_url,
                backdropSizes: obj.images.backdrop_sizes,
                logoSizes: obj.images.logo_sizes,
                posterSizes: obj.images.poster_sizes,
                profileSizes: obj.images.profile_sizes,
                stillSizes: obj.images.still_sizes
            },
            changeKeys: obj.change_keys
        };
        return configuration;
    }

    public async searchMovies(searchTerm: string): Promise<SearchResults> {
        const query: string= `${stringConstants.params.query}${searchTerm}`;
        const obj: any = await this.getApiJson(stringConstants.apiEntities.searchMovie, query);

        if (obj.total_results > 0) {
            return {
                page: obj.page,
                totalResults: obj.total_results,
                totalPages: obj.total_pages,
                movies: (obj.results as any[]).map(item => {
                    return {
                        id: item.id,
                        title: item.title,
                        overview: item.overview,
                        popularity: item.popularity,
                        video: item.video,
                        voteCount: item.vote_count,
                        voteAverage: item.vote_average,
                        releaseDate: item.release_date,
                        originalLanguage: item.original_language,
                        originalTitle: item.original_title,
                        genreIds: item.genre_ids,
                        backdropPath: item.backdrop_path,
                        adult: item.adult,
                        posterPath: item.poster_path
                    }
                })
            };    
        }else {
            return {
                page: obj.page,
                totalResults: obj.total_results,
                totalPages: obj.total_pages,
                movies: []
            };
        }
    }

}