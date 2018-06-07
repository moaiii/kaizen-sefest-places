
import * as actions from '../components/Filters/Filters.action';
var _ = require('lodash');

export const getFilteredList = (store: Function, next: Function, action: Function) => {
  store.dispatch(actions.filterList__start());
  
  // get filter selections
  let location = store.getState().FiltersReducer.location;

  let category = store.getState().FiltersReducer.category
    + ' score';
  
  let subCategory = getSubCategory(store); 
  // console.log(subCategory);
  
  // get list 
  let data = store.getState().IntroReducer.data
    .filter(dataPoint => dataPoint.datatype === location);
  
  // organise 
  let sort_by = subCategory === ' - index' ? category : subCategory;
  
  let data_sorted = category === "crime score"
    ? _.sortBy(data, sort_by).reverse()
    : category === "weather score"
      ? _.sortBy(data, sort_by)
      : category === "property score"
        ? _.sortBy(data, sort_by)
        : category === "healthcare score"
          ? _.sortBy(data, sort_by).reverse()
          : category === "safety score"
            ? _.sortBy(data, sort_by).reverse()
            : _.sortBy(data, sort_by);

  console.log(category, data_sorted)

  // let results = data_sorted.map(x => console.log(x, x.name, sort_by, x[sort_by]));
  
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

function getSubCategory(store) {
  let raw = store.getState().FiltersReducer.subCategory;

  if(raw === 'burglary' 
  || raw === 'robbery' 
  || raw === 'average house price' ) {
    return '*' + raw;
  } else {
    return raw + ' - index';
  }
}