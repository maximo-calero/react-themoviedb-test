import { IDataService } from "./DataServiceInterfaces";
// import { Configuration, SearchResults } from "../model";

export class MockDataService  {
    private apiUrl: string;
    private apiKey: string;

    constructor() {
        if (process.env.API_URL && process.env.API_KEY) {
            this.apiUrl = process.env.API_URL
            this.apiKey = process.env.API_KEY
        }else {
            throw new Error('API Url is not configured');
        }
    }

    public async getConfiguration(): Promise<any> {
        return undefined;
    }

    // public async searchMovies(searchTerm: string): Promise<SearchResults> {
    //     return undefined;
    // }

}