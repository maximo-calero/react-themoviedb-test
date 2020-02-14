import { Configuration, SearchResults, Item, Result } from "../../model";

export interface HomeState {
    configuration: Configuration;
    moviesGenres: Item[];
    tvShowGenres: Item[];
    searchResults: SearchResults;
    searchDefinition: SearchDefinitionValues;
    searchSortValue: string;
    dialogProps: DialogProperties;
}

interface SearchDefinitionValues {
    searchTerm: string;
    searchTypeValue: string;
    placeholderText: string;
}

interface DialogProperties {
    loading: boolean;
    openDialog: boolean;
    dialogItem: Result | undefined;
    keywords: Item[];
}