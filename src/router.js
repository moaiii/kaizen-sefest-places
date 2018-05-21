import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// routes
import {Splash} from './views/splash/splash';
import {Overview} from './views/overview/overview';
import {Detail} from './views/detail/detail';

export default
  <Router>
    <Switch>
      <Route exact path="/" component={Splash}/>
      <Route path="/overview" component={Overview}/>
      <Route path="/detail" component={Detail}/>
    </Switch>
  </Router>;