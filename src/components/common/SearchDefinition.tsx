import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { SearchDefinitionPaper, 
         SearchDefinitionIconButton, 
         SearchDefinitionDivider, 
         SearchInput} from './styled/CommonComponents';
import Select from '@material-ui/core/Select';
import { SearchDefinitionProps } from './ControlInterfaces';
import MenuItem from '@material-ui/core/MenuItem';

const SearchDefinition =(props: SearchDefinitionProps) => {
    return(
        <SearchDefinitionPaper component="form" >
            <Select
                id="demo-customized-select-native"
                value={props.searchTypeValue}
                onChange={props.onChangeSearchType}
            >
                <MenuItem value={'Movies'}>Movies</MenuItem>
                <MenuItem value={'TV Shows'}>TV Shows</MenuItem>
            </Select>            
            <SearchDefinitionDivider  orientation="vertical" />
            <SearchInput
                placeholder={props.placeHolderText}
                inputProps={{ 'aria-label': 'search movies' }}
                onChange={props.onChangeSearchInput}
                value={props.searchTerm}
            />
            <SearchDefinitionIconButton 
                type="submit"  
                aria-label="search"
                onClick={props.onClickSearch}
            >
                <SearchIcon />
            </SearchDefinitionIconButton>

        </SearchDefinitionPaper>
    );
}

export default SearchDefinition;