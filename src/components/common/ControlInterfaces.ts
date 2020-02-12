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
    value: string;
    placeHolderText: string;
    onChangeSearchType: (event: React.ChangeEvent<{ value: unknown }>) => void;
}