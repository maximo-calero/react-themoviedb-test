import React from 'react';
import { styled as styledmui} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

export const AppContainer = styledmui(Container)({

});

export const HomeContainer = styledmui(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const StyledCard = styledmui(Card)({
    width: 270,
    height: 330,
});

export const StyledCardActionArea = styledmui(CardActionArea)({
    minHeight: 285,
});

export const StyledCardMedia = styledmui(CardMedia)({
    height: 140,
    backgroundSize: 92,
});

export const SearchMovieResultsContainer = styledmui(Container) ({
    flexGrow: 1,
});

export const StyledPaper = styledmui(Paper) ({
    padding: 12,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.54)',
    width: '60%',
    height: 400,   
});

export const SearchDefinitionPaper = styledmui(Paper)({
    padding: '0px 4px',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    width: '60%',
    backgroundColor: '#fff',
});

export const SearchDefinitionIconButton = styledmui(IconButton)({
    padding: 10,
});

export const SearchDefinitionDivider = styledmui(Divider)({
    height: 28,
    margin: 4,
});

export const SearchInput = styledmui(InputBase)({
    marginLeft: 8,
    flex: 1,
});

export const SearchResults = styledmui(InfiniteScroll)({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
});

export const SearchResultItem = styled.div({
    padding: 4,
	margin: 0,
    boxSizing: 'border-box'
});

