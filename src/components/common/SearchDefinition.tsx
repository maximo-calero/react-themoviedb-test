import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { SearchDefinitionPaper, 
         SearchDefinitionIconButton, 
         SearchDefinitionDivider, 
         SearchInput} from './styled/CommonComponents';
import NativeSelect from '@material-ui/core/NativeSelect';
import { SearchDefinitionProps } from './ControlInterfaces';

const SearchDefinition =(props: SearchDefinitionProps) => {
    return(
        <SearchDefinitionPaper component="form" >
            <NativeSelect
                id="demo-customized-select-native"
                value={props.searchTypeValue}
                onChange={props.onChangeSearchType}
            >
                <option value={1}>Movies</option>
                <option value={2}>People</option>
                <option value={3}>TV Shows</option>
            </NativeSelect>            
            <SearchDefinitionDivider  orientation="vertical" />
            <SearchInput
                placeholder={props.placeHolderText}
                inputProps={{ 'aria-label': 'search movies' }}
                onChange={props.onChangeSearchInput}
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