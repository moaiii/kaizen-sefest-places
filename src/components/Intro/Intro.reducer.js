// @flow
type State = {
  +url: string,
  +fetching: boolean,
  +repos: array
};

type Action = {
 +type: string,
 +payload: string | boolean | object
}

let initialState = {};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {

  case "INITIALISE": {
    return Object.assign({}, state, {
      url: action.payload
    });
  }
  case "INITIALISE__PENDING": {
    return Object.assign({}, state, {
      fetching: true
    });
  }
  case "INITIALISE__RESOLVED": {
    return Object.assign({}, state, {
      repos: action.payload
    });
  }

  default: {
      return state;
    }
  }
};