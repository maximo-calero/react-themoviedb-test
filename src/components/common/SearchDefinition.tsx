import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { SearchDefinitionPaper, 
         SearchDefinitionIconButton, 
         SearchDefinitionDivider, 
         SearchInput} from './styled/CommonComponents';
import Select from '@material-ui/core/Select';
import { SearchDefinitionProps } from './ControlInterfaces';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

const SearchDefinition =(props: SearchDefinitionProps) => {
    return(
        <SearchDefinitionPaper component="form" >
            <Typography component="span">Search type:  </Typography>
            <Select
                value={props.searchTypeValue}
                onChange={props.onChangeSearchType}
            >
                <MenuItem value={'Movies'}>Movies</MenuItem>
                <MenuItem value={'TV Shows'}>TV Shows</MenuItem>
            </Select>            
            <SearchDefinitionDivider orientation="vertical" flexItem />
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
            <SearchDefinitionDivider  orientation="vertical" />
            <Select
                value={props.searchSortValue}
                onChange={props.onChangeSort}
                label='Order by'
            >
                <MenuItem value={'Title'}>Title</MenuItem>
                <MenuItem value={'Release date'}>Release date</MenuItem>
                <MenuItem value={'Vote average'}>Vote average (DESC)</MenuItem>
            </Select>
        </SearchDefinitionPaper>
    );
}

export default SearchDefinition;