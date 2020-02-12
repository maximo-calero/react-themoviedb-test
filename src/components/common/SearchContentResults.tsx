import React from 'react';
import { SearchContentResultsProps } from './ControlInterfaces';
import Grid from '@material-ui/core/Grid';
import { SearchMovieResultsContainer } from './styled/CommonComponents';
import MediaCard from './MediaCard';

class SearchContentResults extends React.Component<SearchContentResultsProps> {
    constructor(props: SearchContentResultsProps) {
        super(props);
    }

    render() {
        return(
            <SearchMovieResultsContainer>
                <Grid container 
                      direction='row' 
                      justify='center' 
                      alignItems='flex-start' 
                      spacing={1}
                >
                    {this.props.results.length > 0 &&
                        this.props.results.map(item => {
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

export default SearchContentResults;