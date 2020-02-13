import React from 'react';
import { SearchContentResultsProps } from './ControlInterfaces';
import { SearchMovieResultsContainer, SearchResults, SearchResultItem } from './styled/CommonComponents';
import MediaCard from './MediaCard';

class SearchContentResults extends React.Component<SearchContentResultsProps> {
    constructor(props: SearchContentResultsProps) {
        super(props);
    }
    handleClickCard = (id: string) => {
        this.props.onClickCard(id)
    }

    render() {
        const loader = <div key={0} className="loader">Loading ...</div>;
        const items = this.props.results.map(item => {
            return (
                <SearchResultItem key={item.id}>
                    <MediaCard
                            id={item.id}
                            title={item.title} 
                            image={item.posterPath && `${this.props.imageBaseUrl}${item.posterPath}`}
                            contentTitle={item.title}
                            contentDescription={item.shortDescription}
                            releaseDate={item.releaseDate && item.releaseDate.toLocaleDateString()}
                            voteAverage={item.voteAverage}
                            onClickCard={this.handleClickCard}
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