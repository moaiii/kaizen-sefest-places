import IntroReducer from "./components/Intro/Intro.reducer.js"

import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {combineReducers} from 'redux';

import * as actions from './components/Intro/Intro.action';

const customMiddleWare = store => next => action => {

  if(action.type === "FETCH_DATA") {
    store.dispatch(actions.fetchData__pending());

    fetch(action.payload.url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        store.dispatch(actions.fetchData__resolved(json));
        next(action);
      })
      .catch(error => {
        store.dispatch(actions.fetchData__error(error));
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
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(customMiddleWare, logger)
);

export default store;