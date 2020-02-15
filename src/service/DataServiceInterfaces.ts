import { Configuration, SearchResults, Item, RatedMovie } from "../model";

export interface IDataService {
    getConfiguration: () => Promise<Configuration>;
    searchMovies: (searchTerm: string, page: number) => Promise<SearchResults>;
    searchTvShows: (searchTerm: string, page: number) => Promise<SearchResults>;
    getGenres: (type: string) => Promise<Item[]>;
    getKeywords: (id: string, type:string) => Promise<Item[]>;
    getRatedMovie: (id: string) => Promise<RatedMovie | undefined>
    rateMovie: (id: string, rateValue: number) => Promise<any>;
}