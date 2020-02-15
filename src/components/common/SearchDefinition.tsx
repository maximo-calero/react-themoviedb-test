import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { SearchDefinitionProps } from './ControlInterfaces';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { createStyles, 
    makeStyles, 
    Theme } from '@material-ui/core/styles';

export const useSearchDefinitionStyles = makeStyles((theme: Theme) => 
    createStyles({
        searchText: {
            '& label.Mui-focused': {
            color: 'green',
            },
            '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
            },
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover fieldset': {
                borderColor: 'blue',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
            },
            marginLeft: 8,
            marginBottom: 15,
            width: '15rem'
        },
        searchPaper: {
            padding: '15px 10px 5px',
            marginBottom: 10,
            display: 'flex',
            alignItems: 'flex-start',
            width: '100%',
            backgroundColor: '#fff',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        dropDown: {
            marginBottom: 15,
            width: '15rem'
        },
        searchIconButton: {
            padding: 10,
            width: '4rem',
            height: '4rem',
        },
        searchContainer: {
            width: '20rem'
        }
    })
);

const SearchDefinition =(props: SearchDefinitionProps) => {
    const styles = useSearchDefinitionStyles();
    return(
        <Paper component="form" className={styles.searchPaper} >
            <TextField
                className={styles.dropDown}
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
            <Grid className={styles.searchContainer} 
                  container 
                  direction='row' 
                  justify='center' 
                  alignItems='flex-start'
            >
                <TextField
                    className={styles.searchText}
                    inputProps={{ 'aria-label': 'search movies' }}
                    onChange={props.onChangeSearchInput}
                    value={props.searchTerm}
                    label={props.placeHolderText}
                    variant="outlined"
                />
                <IconButton 
                    className={styles.searchIconButton}
                    type="submit"  
                    aria-label="search"
                    onClick={props.onClickSearch}
                >
                    <SearchIcon />
                </IconButton>
            </Grid>
            <TextField
                className={styles.dropDown}
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
        </Paper>
    );
}

export default SearchDefinition;