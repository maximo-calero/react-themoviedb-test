export interface Result {
    id: number;
    title: string;
    shortDescription: string;
    overview: string;
    popularity: number;
    voteCount: number;
    voteAverage: number;
    genreIds: number[];
    releaseDate: Date;
    posterPath: string;
    backdropPath: string;
    originalLanguage: string;
    rating: number;
}