// @flow
type State = {
  +url: string,
  +data: Array<Object>,
  +fetching: boolean,
  +fetched: boolean,
  +error: Object
};

type Action = {
 +type: string,
 +payload: Object
}

let initialState: State = {
  url: '',
  data: [],
  fetching: false,
  fetched: false,
  error: {}
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {

  case "FETCH_DATA": {
    return Object.assign({}, state, {
      url: action.payload.url,
    });
  }
  case "FETCH_DATA__PENDING": {
    return Object.assign({}, state, {
      fetching: true,
      fetched: false
    });
  }
  case "FETCH_DATA__RESOLVED": {
    return Object.assign({}, state, {
      data: action.payload.data,
      fetching: false,
      fetched: true,
    });
  }
  case "FETCH_DATA__ERROR": {
    return Object.assign({}, state, {
      fetching: false,
      fetched: false,
      error: action.payload.error
    });
  }

  default: {
      return state;
    }
  }
};