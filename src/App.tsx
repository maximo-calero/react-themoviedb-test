import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/Main';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppContainer } from './components/common/styled/CommonComponents';




const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppContainer maxWidth="lg">
        <Header />
        <Main />
      </AppContainer>
    </React.Fragment>    
  );
}

export default App;
