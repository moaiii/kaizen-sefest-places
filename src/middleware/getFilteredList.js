
import * as actions from '../components/Filters/Filters.action';
var _ = require('lodash');

export const getFilteredList = (store: Function, next: Function, action: Function) => {
  store.dispatch(actions.filterList__start());

  // get filter selections
  let location = store.getState().FiltersReducer.location;

  let category = capitalize(store.getState().FiltersReducer.category) 
    + ' Score';
  
  let subCategory = capitalize(store.getState().FiltersReducer.subCategory)
    + ' - index';

  // get list 
  let data = store.getState().IntroReducer.data
    .filter(dataPoint => dataPoint.DataType === location)
    .map(dp => {
      
    });
  
  // organise 
  let sort_by = subCategory === ' - index' ? category : subCategory;
  let data_sorted = _.sortBy(data, sort_by);

  let results = data_sorted.map(x => console.log(x.Name, sort_by, x[sort_by]));

  // give time for the animation
  setTimeout(() => {
    // end middleware
    store.dispatch(actions.filterList__end(data_sorted));
    next(action);
  }, 500);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}