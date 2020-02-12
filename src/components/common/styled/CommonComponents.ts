import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

export const StyledCard = styled(Card)({
    maxWidth: 345,
});

export const StyledCardMedia = styled(CardMedia)({
    height: 140,
});

export const SearchMovieResultsContainer = styled(Container) ({
    flexGrow: 1,
});

export const StyledPaper = styled(Paper) ({
    padding: 12,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.54)',
});