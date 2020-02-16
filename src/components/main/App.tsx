import React from 'react';
import Header from '../header/Header';
import Layout from './Layout';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppContainer } from '../controls/styled/CommonComponents';
import Typography from '@material-ui/core/Typography';
import { styled as styledmui, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    background: {
      default: "white"
    }
  }
});

const StyledHeading = styledmui(Typography)({
  textAlign: 'center',
  maxWidth: '100%',
  fontSize: '3rem',
  color: 'steelblue'
});

const App = () => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
      </MuiThemeProvider>
      <AppContainer maxWidth="lg">
        <StyledHeading variant="h2" gutterBottom>Movie Database Search</StyledHeading>
        <Header />
        <Layout />
      </AppContainer>
    </React.Fragment>    
  );
}

export default App;
