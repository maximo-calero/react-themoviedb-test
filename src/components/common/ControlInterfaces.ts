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