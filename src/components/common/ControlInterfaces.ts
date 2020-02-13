import { Result } from "../../model/Result";

export interface MediaCardProps {
    title: string;
    image: string;
    contentTitle: string;
    contentDescription: string;
}

export interface SearchContentResultsProps {
    imageBaseUrl: string;
    hasMoreItems: boolean;
    results: Result[];
    loadResults:() => void;
}

export interface SearchDefinitionProps {
    searchTerm: string;
    searchTypeValue: string;
    placeHolderText: string;
    searchSortValue: string;
    //onChangeSearchType: (event: React.ChangeEvent<{ value: unknown }>) => void;
    onChangeSearchType: (event: any) => void;
    onChangeSort: (event: any) => void;
    onChangeSearchInput: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onClickSearch: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}