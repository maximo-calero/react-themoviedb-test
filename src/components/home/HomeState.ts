import { Configuration, SearchResults } from "../../model";

export interface HomeState {
    configuration: Configuration;
    searchResults: SearchResults;
    searchDefinition: SearchDefinitionValues;
    searchSortValue: string;
}

interface SearchDefinitionValues {
    searchTerm: string;
    searchTypeValue: string;
    placeholderText: string;
}