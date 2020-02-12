import { Configuration, SearchResults } from "../../model";

export interface HomeState {
    configuration: Configuration;
    searchResults: SearchResults;
    searchDefinition: SearchDefinitionValues;
}

interface SearchDefinitionValues {
    value: string;
    placeholderText: string;
}