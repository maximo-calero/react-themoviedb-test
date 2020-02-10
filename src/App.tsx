import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DataService } from './service/DataService';
import Home from './components/home/Home';




const App = () => {
  // const dataService: DataService = new DataService();
  // const configuration: any = await dataService.getConfiguration();
  // console.log(configuration);
  return (
    <Home title='test'/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
