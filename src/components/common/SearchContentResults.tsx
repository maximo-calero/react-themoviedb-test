import React from 'react';
import { SearchContentResultsProps } from './ControlInterfaces';
import { SearchMovieResultsContainer, SearchResults, SearchResultItem } from './styled/CommonComponents';
import MediaCard from './MediaCard';
import { Movie, TvShow } from '../../model';

class SearchContentResults extends React.Component<SearchContentResultsProps> {
    constructor(props: SearchContentResultsProps) {
        super(props);
    }

    render() {
        const loader = <div key={0} className="loader">Loading ...</div>;
        const items = this.props.results.map(item => {
            return (
                <SearchResultItem key={item.id}>
                    <MediaCard 
                            title={item.title} 
                            image={item.posterPath && `${this.props.imageBaseUrl}${item.posterPath}`}
                            contentTitle={item.title}
                            contentDescription={item.shortDescription}
                            releaseDate={item.releaseDate && item.releaseDate.toLocaleDateString()}
                            voteAverage={item.voteAverage}
                                />                                
                </SearchResultItem>                            
            );
        });
        return(

            <SearchMovieResultsContainer>
                <SearchResults
                    pageStart={1}
                    loadMore={this.props.loadResults}
                    hasMore={this.props.hasMoreItems}
                    loader={loader}
                >
                    {this.props.results.length > 0 &&
                        items
                    }
                </SearchResults>
            </SearchMovieResultsContainer>
        );
    }
}

export default SearchContentResults;