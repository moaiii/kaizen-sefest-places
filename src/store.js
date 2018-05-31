import GridReducer from "./components/Grid/Grid.reducer.js"
import SocialReducer from "./components/Social/Social.reducer.js"
import FiltersReducer from "./components/Filters/Filters.reducer.js"
import IntroReducer from "./components/Intro/Intro.reducer.js"

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';

// middlewares
import { getData } from './middleware/getData';
import { getFilteredList } from './middleware/getFilteredList';

const customMiddleWare = store => next => action => {
  
  if(action.type === "FETCH_DATA") {
    getData(store, next, action);
  
  } else if (action.type === "SET_SELECTION") {
    next(action);
    getFilteredList(store, next, action);
    
  } else {
    next(action);
  }
}

// Combine Reducers
let reducers = combineReducers({
  IntroReducer, 
  FiltersReducer
});

const logger = createLogger({
  collapsed: true, diff: true
});

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(customMiddleWare, logger)
);

export default store;