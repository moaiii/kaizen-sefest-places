import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

// routes
import {Splash} from './views/splash/splash';
import Overview from './views/overview/overview';
import {Stats} from './views/stats/stats';

export default(
  <Router basename="/">
    <div className='Router__container'>
      <Route exact path="/" component={Splash}/>
      <Route path="/overview" component={Overview}/>
      <Route path="/stats" component={Stats}/>
    </div>
  </Router>
)