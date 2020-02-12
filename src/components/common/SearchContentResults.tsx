import React from 'react';
import { SearchContentResultsProps } from './ControlInterfaces';
import Grid from '@material-ui/core/Grid';
import { SearchMovieResultsContainer } from './styled/CommonComponents';
import MediaCard from './MediaCard';
import InfiniteScroll from 'react-infinite-scroller';

class SearchContentResults extends React.Component<SearchContentResultsProps> {
    constructor(props: SearchContentResultsProps) {
        super(props);
    }

    render() {
        const loader = <div className="loader">Loading ...</div>;
        const items = this.props.results.map(item => {
            return (
                <Grid className="track" key={item.id} item>
                    <MediaCard 
                            title={item.title} 
                            image={`${this.props.imageBaseUrl}${item.posterPath}`}
                            contentTitle={item.title}
                            contentDescription={item.shortDescription}
                                />                                
                </Grid>                            
            );
        });
        return(

            <SearchMovieResultsContainer>
                <Grid container 
                      direction='row' 
                      justify='center' 
                      alignItems='flex-start' 
                      spacing={1}
                >
                    <InfiniteScroll
                        pageStart={1}
                        loadMore={this.props.loadResults}
                        hasMore={this.props.hasMoreItems}
                        loader={loader}
                    >
                        {this.props.results.length > 0 &&
                            items
                        }
                    </InfiniteScroll>
                </Grid>
            </SearchMovieResultsContainer>
        );
    }
}

export default SearchContentResults;