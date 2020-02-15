import { IDataService } from "./DataServiceInterfaces";
import { Configuration, SearchResults, Movie, TvShow, Item, Result } from "../model";
import { stringConstants } from "../common/StringConstants";
import { stringToEnum, stringToDate } from "../common/FunctionsHelper";


export class DataService implements IDataService {
    private apiUrl: string;
    private apiKey: string;
    private sessionId: string;

    constructor() {
        if (process.env.API_URL && process.env.API_KEY && process.env.SESSION_ID) {
            this.apiUrl = process.env.API_URL;
            this.apiKey = process.env.API_KEY;
            this.sessionId = process.env.SESSION_ID;
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
            throw new Error(response.statusText);
        }
        return await response.json();
    }

    public async getGenres(type: string): Promise<Item[]> {
        const obj: any = await this.getApiJson(`${stringConstants.apiEntities.genre}${type}list`)
        if (obj.genres.length > 0) {
            return (obj.genres as any[]).map(item => {
                return {
                    id: item.id,
                    name: item.name
                };
            })
        }else {
            return []
        }
    }

    public async getKeywords(id: string, type:string): Promise<Item[]> {
        const obj: any = await this.getApiJson(`${type}${id}${stringConstants.apiEntities.keywords}`);
        
        if (obj.keywords && obj.keywords.length > 0) {
            return (obj.keywords as any[]).map(item => {
                return {
                    id: item.id,
                    name: item.name
                };
            });
        }else if (obj.results && obj.results.length){
            return (obj.results as any[]).map(item => {
                return {
                    id: item.id,
                    name: item.name
                };
            });
        }else {
            return []
        }
    }

    public async getConfiguration(): Promise<Configuration> {
        const obj: any = await this.getApiJson(stringConstants.apiEntities.configuration)
        const configuration: Configuration = {
            images: {
                baseUrl: obj.images.base_url,
                secureBaseUrl: obj.images.secure_base_url,
                backdropSizes: stringToEnum(obj.images.backdrop_sizes),
                logoSizes: stringToEnum(obj.images.logo_sizes),
                posterSizes: stringToEnum(obj.images.poster_sizes),
                profileSizes: stringToEnum(obj.images.profile_sizes),
                stillSizes: stringToEnum(obj.images.still_sizes)
            },
            changeKeys: stringToEnum(obj.change_keys)
        };
        return configuration;
    }

    public async getMoviesRated(): Promise<Result[]> {
        let page: number = 0;
        const totalPages: number = 0;
        const arrayResult: any[] = [];

        while (totalPages >= page) {
            if (totalPages < page)
                page ++;
            else
                page = totalPages

            const obj = await this.getAllMoviesRated(page.toString());
            if (obj.total_results > 0) {
                (obj.results as any[]).forEach(item => {
                    arrayResult.push(item);
                });
            }
        }

        if (arrayResult.length > 0) {
            const movies: Movie[] = arrayResult.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    overview: item.overview,
                    shortDescription: item.overview 
                                        ? (item.overview as string).length > 60
                                            ? `${(item.overview as string).substr(0, 60)}...`
                                            : (item.overview as string)
                                        : '',
                    popularity: item.popularity,
                    video: item.video,
                    voteCount: item.vote_count,
                    voteAverage: item.vote_average,
                    releaseDate: item.release_date && stringToDate(item.release_date),
                    originalLanguage: item.original_language,
                    originalTitle: item.original_title,
                    genreIds: item.genre_ids,
                    backdropPath: item.backdrop_path,
                    adult: item.adult,
                    posterPath: item.poster_path,
                    rating: 0
                };
            });
            return movies;
        }else {
            return [];
        }
    }

    private async getAllMoviesRated(page: string): Promise<any> {
        const url: string = 
                `${this.apiUrl}
                ${stringConstants.apiEntities.account}
                ${stringConstants.verbs.ratedMovies}
                ${stringConstants.params.apiKey}${this.apiKey}
                ${stringConstants.params.sessionId}${this.sessionId}
                ${stringConstants.params.page}${page}`;
        const response: Response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    }

    public async searchMovies(searchTerm: string, page: number): Promise<SearchResults> {
        const query: string= `${stringConstants.params.query}${searchTerm}${stringConstants.params.page}${page.toString()}`;
        const obj: any = await this.getApiJson(stringConstants.verbs.searchMovie, query);

        if (obj.total_results > 0) {
            const movies: Movie[] = (obj.results as any[]).map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    overview: item.overview,
                    shortDescription: item.overview 
                                        ? (item.overview as string).length > 60
                                            ? `${(item.overview as string).substr(0, 60)}...`
                                            : (item.overview as string)
                                        : '',
                    popularity: item.popularity,
                    video: item.video,
                    voteCount: item.vote_count,
                    voteAverage: item.vote_average,
                    releaseDate: item.release_date && stringToDate(item.release_date),
                    originalLanguage: item.original_language,
                    originalTitle: item.original_title,
                    genreIds: item.genre_ids,
                    backdropPath: item.backdrop_path,
                    adult: item.adult,
                    posterPath: item.poster_path,
                    rating: 0
                };
            });

            return {
                page: obj.page,
                totalResults: obj.total_results,
                totalPages: obj.total_pages,
                results: movies
            };
        }else {
            return {
                page: obj.page,
                totalResults: obj.total_results,
                totalPages: obj.total_pages,
                results: []
            };
        }
    }

    public async searchTvShows(searchTerm: string, page: number): Promise<SearchResults> {
        const query: string= `${stringConstants.params.query}${searchTerm}${stringConstants.params.page}${page.toString()}`;
        const obj: any = await this.getApiJson(stringConstants.verbs.searchTvShow, query);

        if (obj.total_results > 0) {
            const tvShows: TvShow[] = (obj.results as any[]).map(item => {
                return {
                    id: item.id,
                    title: item.name,
                    overview: item.overview,
                    shortDescription: item.overview 
                                        ? (item.overview as string).length > 60
                                            ? `${(item.overview as string).substr(0, 60)}...`
                                            : (item.overview as string)
                                        : '',
                    popularity: item.popularity,
                    voteCount: item.vote_count,
                    voteAverage: item.vote_average,
                    releaseDate: item.first_air_date && stringToDate(item.first_air_date),
                    originalName: item.original_name,
                    originCountry: item.origin_country,
                    originalLanguage: item.original_language,
                    genreIds: item.genre_ids,
                    backdropPath: item.backdrop_path,
                    posterPath: item.poster_path,
                    rating: 0
                };
            });

            return {
                page: obj.page,
                totalResults: obj.total_results,
                totalPages: obj.total_pages,
                results: tvShows
            };
        }else {
            return {
                page: obj.page,
                totalResults: obj.total_results,
                totalPages: obj.total_pages,
                results: []
            };
        }
    }

    public async rateMovie(id: string, rateValue: number): Promise<any> {
        const objValue = {
            value: rateValue
        };
        const postUrl: string = 
            `${this.apiUrl}${stringConstants.apiEntities.movie}${id}${stringConstants.verbs.rating}${stringConstants.params.apiKey}${this.apiKey}${stringConstants.params.sessionId}${this.sessionId}`;
    
        const response: Response = await fetch(postUrl, {
            method: 'POST',
            headers: { 'content-type': 'application/json;charset=utf-8' },
            body: JSON.stringify(objValue)
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    }
}