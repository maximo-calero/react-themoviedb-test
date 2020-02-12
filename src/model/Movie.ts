
export interface Movie {
    id: number;
    title: string;
    shortDescription: string;
    overview: string;
    popularity: number;
    video: boolean;
    voteCount: number;
    voteAverage: number;
    releaseDate: string;
    originalLanguage: string;
    originalTitle: string;
    genreIds: number[];
    backdropPath: string;
    adult: boolean;
    posterPath: string;
}