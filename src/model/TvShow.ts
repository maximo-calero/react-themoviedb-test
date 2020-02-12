import { Result } from "./Result";

export interface TvShow  extends Result{
    originalName: string;
    originCountry: string[];
}