import { Configuration, SearchResults } from "../model";

export interface IDataService {
    getConfiguration: () => Promise<Configuration>;
    searchMovies(searchTerm: string): Promise<SearchResults>;
    searchTvShows(searchTerm: string): Promise<SearchResults>;
}