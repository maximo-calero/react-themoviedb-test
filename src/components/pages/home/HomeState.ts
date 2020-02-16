import { Configuration, SearchResults, Item, Result } from "../../../model";
import { SearchDefinitionValues, DialogProperties } from "../../../common/CommonInterfaces";

export interface HomeState {
    configuration: Configuration;
    moviesGenres: Item[];
    tvShowGenres: Item[];
    searchResults: SearchResults;
    searchDefinition: SearchDefinitionValues;
    searchSortValue: string;
    dialogProps: DialogProperties;
}
