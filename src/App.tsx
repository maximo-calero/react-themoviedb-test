import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/Main';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';



const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
        <Main />
      </Container>
    </React.Fragment>    
  );
}

export default App;
