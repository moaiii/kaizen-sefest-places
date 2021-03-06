// @flow
type State = {
  +name: string, 
  +rank: number
};

type Action = {
 type: string,
 payload: Object
};

let initialState = {
  name: '',
  rank: 1
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {

    case "SET_SELECTED_CITY": {
      return Object.assign({}, state, {
        name: action.payload.name,
        rank: action.payload.rank
      })
    }

    default: {
      return state;
    }
  }
};
