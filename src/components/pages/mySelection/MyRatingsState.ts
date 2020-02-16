import { DialogProperties } from "../../../common/CommonInterfaces";
import { SearchResults, Item, Configuration } from "../../../model";

export interface MyRatingsState {
    configuration: Configuration;
    moviesGenres: Item[];
    searchResults: SearchResults;
    searchSortValue: string;
    imageUrl: string;
    imageUrlW185: string;
    dialogProps: DialogProperties;
}