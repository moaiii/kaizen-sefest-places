import IntroReducer from "./components/Intro/Intro.reducer.js"

import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {combineReducers} from 'redux';

import * as actions from './components/Intro/Intro.action';

const customMiddleWare = store => next => action => {

  if(action.type === "INITIALISE") {
    store.dispatch(actions.startInit());
    fetch(action.payload)
      .then(res => {
        return res.json();
      })
      .then(json => {
        store.dispatch(actions.resolved(json));
        next(action);
      })
      .catch(err => {
        console.log('Error getting repo', err);
        next(action);
      });
  } else {
    next(action);
  }
}

// Combine Reducers
let reducers = combineReducers({
  IntroReducer
});

let store = createStore(
  reducers,
  applyMiddleware(customMiddleWare, logger)
);

export default store;