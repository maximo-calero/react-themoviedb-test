import { Result } from "../../model/Result";
import { Item } from "../../model";
import { ChangeEvent } from "react";

export interface MediaCardProps {
    id: number;
    title: string;
    image: string;
    releaseDate: string;
    voteAverage: number;
    contentTitle: string;
    contentDescription: string;
    onClickCard: (id: string) => void;
}

export interface SearchContentResultsProps {
    imageBaseUrl: string;
    hasMoreItems: boolean;
    results: Result[];
    loadResults:() => void;
    onClickCard: (id: string) => void;
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

export interface ItemDetailDialogProps {
    baseImageUrl: string;
    openDialog: boolean;
    showBackdrop: boolean;
    type: string;
    dialogItem: Result | undefined;
    genres: string[];
    keywords: Item[];
    ratingValue: number;
    ratingMessage: string;
    onEntered: (event: any) => void;
    onClickDialogOk: (event: any) => void;
    onChangeRating: (event: ChangeEvent<{}>, newValue: number | null) => void;
}