import React from 'react';
import Header from './components/header/Header';
import Main from './components/Main';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppContainer } from './components/common/styled/CommonComponents';
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
        <Main />
      </AppContainer>
    </React.Fragment>    
  );
}

export default App;
