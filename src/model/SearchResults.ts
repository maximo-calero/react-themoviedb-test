import { Result } from "./Result";

export interface SearchResults {
    page: number;
    totalResults: number;
    totalPages: number;
    results: Result[];
}