import { Result } from "./Result";

export interface Movie extends Result {
    video: boolean;
    originalTitle: string;
    adult: boolean;
}