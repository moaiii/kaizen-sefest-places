import * as actions from '../components/Intro/Intro.action';

export const getData = (store, next, action) => {
  store.dispatch(actions.fetchData__pending());

  fetch(process.env.REACT_APP_UK_DATA_URL)
    .then(res => res.json())
    .then(uk_json => {
      
      fetch(process.env.REACT_APP_LONDON_DATA_URL)
        .then(res => res.json())
        .then(london_json => {
          store.dispatch(actions.fetchData__resolved([...uk_json, ...london_json]));
          next(action);
        })
        .catch(error => {
          store.dispatch(actions.fetchData__error(error));
          next(action);
        });
    })
    .catch(error => {
      store.dispatch(actions.fetchData__error(error));
      next(action);
    });
}