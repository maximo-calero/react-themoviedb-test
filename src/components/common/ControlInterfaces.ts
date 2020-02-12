import { Movie } from "../../model";

export interface MediaCardProps {
    title: string;
    image: string;
    contentTitle: string;
    contentDescription: string;
}

export interface SearchResultsProps {
    imageBaseUrl: string;
    movies: Movie[];
}

export interface SearchDefinitionProps {
    searchTerm: string;
    searchTypeValue: string;
    placeHolderText: string;
    onChangeSearchType: (event: React.ChangeEvent<{ value: unknown }>) => void;
    onChangeSearchInput: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onClickSearch: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}