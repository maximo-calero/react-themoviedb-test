import { styled as styledmui} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import RateReviewTwoTone from '@material-ui/icons/RateReviewTwoTone';
import EventTwoTone from '@material-ui/icons/EventTwoTone';

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

export const StyledTitle = styledmui(Typography)({
    fontSize: '0.9rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: '0em',
});

export const StyledDescription = styledmui(Typography)({
    fontSize: '0.9rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: '0em',
});



export const StyledCardActionArea = styledmui(CardActionArea)({
    minHeight: 285,
});

export const StyledCardMedia = styledmui(CardMedia)({
    height: 140,
    backgroundSize: 92,
});

export const StyledCardAction = styledmui(CardActions)({
    display: 'flex',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
})

export const StyledCardActionSpanDiv = styled.div({
    display: 'flex',
    alignItems: 'center'
});

export const StyledCardActionSpan = styled.span({
    fontSize: '0.9rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
    paddingLeft: '0.2rem'
});

export const StyledEventTwoTone = styled(EventTwoTone)({
    fill: 'currentColor',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fontSize: '1.3rem',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    flexShrink: 0,
    userSelect: 'none',
});

export const StyledRateReviewTwoTone = styled(RateReviewTwoTone)({
    fill: 'currentColor',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fontSize: '1.3rem',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    flexShrink: 0,
    userSelect: 'none',
});

export const SearchMovieResultsContainer = styledmui(Container) ({
    flexGrow: 1,
});

export const StyledPaper = styledmui(Paper) ({
    padding: 12,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.54)',
    width: '100%',
    height: 400,   
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

