import { Movie } from "./Movie";

export interface SearchResults {
    page: number;
    totalResults: number;
    totalPages: number;
    movies: Movie[];
}