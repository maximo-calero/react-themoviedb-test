import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { SearchDefinitionPaper, 
         SearchDefinitionIconButton, 
         SearchInput} from './styled/CommonComponents';
import { SearchDefinitionProps } from './ControlInterfaces';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const SearchDefinition =(props: SearchDefinitionProps) => {
    return(
        <SearchDefinitionPaper component="form" >
            <TextField
                id="outlined-select-currency"
                select
                label="Search Type"
                value={props.searchTypeValue}
                onChange={props.onChangeSearchType}
                helperText="Please select your search type"
                variant="outlined"
            >
                <MenuItem value={'Movies'}>Movies</MenuItem>
                <MenuItem value={'TV Shows'}>TV Shows</MenuItem>
            </TextField>            
            <SearchInput
                // placeholder={props.placeHolderText}
                inputProps={{ 'aria-label': 'search movies' }}
                onChange={props.onChangeSearchInput}
                value={props.searchTerm}
                label={props.placeHolderText}
                variant="outlined"
            />
            <SearchDefinitionIconButton 
                type="submit"  
                aria-label="search"
                onClick={props.onClickSearch}
            >
                <SearchIcon />
            </SearchDefinitionIconButton>
            <TextField
                id="outlined-select-currency"
                select
                label="Sort by"
                value={props.searchSortValue}
                onChange={props.onChangeSort}
                helperText="Please select the field to sort results"
                variant="outlined"
            >
                <MenuItem value={'Title'}>Title</MenuItem>
                <MenuItem value={'Release date'}>Release date</MenuItem>
                <MenuItem value={'Vote average'}>Vote average (DESC)</MenuItem>
            </TextField>              
        </SearchDefinitionPaper>
    );
}

export default SearchDefinition;