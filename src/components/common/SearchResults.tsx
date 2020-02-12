import React from 'react';
import { SearchResultsProps } from './ControlInterfaces';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { StyledPaper, SearchMovieResultsContainer } from './styled/CommonComponents';
import MediaCard from './MediaCard';

class SearchMovieResults extends React.Component<SearchResultsProps> {
    constructor(props: SearchResultsProps) {
        super(props);
    }

    render() {
        return(
            <SearchMovieResultsContainer>
                <Grid container spacing={1}>
                    {this.props.movies.length === 0 &&
                        <StyledPaper>No results</StyledPaper>
                    }
                    {this.props.movies.length > 0 &&
                        this.props.movies.map(item => {
                            return (
                                <Grid key={item.id} item>
                                    <MediaCard 
                                            title={item.title} 
                                            image={`${this.props.imageBaseUrl}${item.posterPath}`}
                                            contentTitle={item.title}
                                            contentDescription={item.shortDescription}
                                                />                                
                                </Grid>                            
                            );
                        })

                    }
                </Grid>
            </SearchMovieResultsContainer>
        );
    }
}

export default SearchMovieResults;