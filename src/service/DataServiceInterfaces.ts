import { Configuration, SearchResults } from "../model";

export interface IDataService {
    getConfiguration: () => Promise<Configuration>;
    searchMovies(searchTerm: string, page: number): Promise<SearchResults>;
    searchTvShows(searchTerm: string): Promise<SearchResults>;
}