import { Result, Item } from "../model";

export interface SearchDefinitionValues {
    searchTerm: string;
    searchTypeValue: string;
    placeholderText: string;
}

export interface DialogProperties {
    loading: boolean;
    openDialog: boolean;
    dialogItem: Result | undefined;
    genres: string[];
    keywords: Item[];
    rating: number;
    ratingMessage: string;
}