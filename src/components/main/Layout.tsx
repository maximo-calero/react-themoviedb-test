import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import MyRatings from '../pages/mySelection/MyRatings';


const Layout = () => {
  return(
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/my-rated-movies' component={MyRatings}/>
        <Route path='/about' component={About}/>
      </Switch>
    </main>
  )
};

export default Layout;