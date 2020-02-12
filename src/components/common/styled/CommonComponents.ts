import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';

export const AppContainer = styled(Container)({

});

export const HomeContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const StyledCard = styled(Card)({
    width: 345,
    height: 330,
});

export const StyledCardActionArea = styled(CardActionArea)({
    minHeight: 285,
});

export const StyledCardMedia = styled(CardMedia)({
    height: 140,
    backgroundSize: 92,
});

export const SearchMovieResultsContainer = styled(Container) ({
    flexGrow: 1,
});

export const StyledPaper = styled(Paper) ({
    padding: 12,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.54)',
    width: '60%',
    height: 400,   
});

export const SearchDefinitionPaper = styled(Paper)({
    padding: '0px 4px',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    width: '60%',
    backgroundColor: '#fff',
});

export const SearchDefinitionIconButton = styled(IconButton)({
    padding: 10,
});

export const SearchDefinitionDivider = styled(Divider)({
    height: 28,
    margin: 4,
});

export const SearchInput = styled(InputBase)({
    marginLeft: 8,
    flex: 1,
});

