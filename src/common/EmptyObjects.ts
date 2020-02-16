import { Configuration, SearchResults } from "../model";
import { SearchDefinitionValues, DialogProperties } from "./CommonInterfaces";

export const emptyConfiguration: Configuration = {
    images: {
        baseUrl: '',
        secureBaseUrl: '',
        backdropSizes: [],
        logoSizes: [],
        posterSizes: [],
        profileSizes: [],
        stillSizes: []
    },
    changeKeys: []

};

export const emptySearchResults: SearchResults = {
    page: 0,
    totalPages: 0,
    totalResults: 0,
    results: []
};

export const emptySearchDefinition: SearchDefinitionValues = {
    searchTerm: '',
    searchTypeValue: 'Movies',
    placeholderText: 'Search Movies'
};

export const emptyDialogProps: DialogProperties = {
    loading: false,
    openDialog: false,
    dialogItem: undefined,
    genres: [],
    keywords: [],
    rating: 0,
    ratingMessage: ''
};