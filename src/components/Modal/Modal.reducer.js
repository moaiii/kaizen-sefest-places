// @flow
type State = {
  isOpen: boolean
};

type Action = {
 type: string,
 payload: boolean
}

let initialState = {
  isOpen: false
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {

    case "SET_MODAL_VISIBILITY": {
      return Object.assign({}, state, {
        isOpen: action.payload
      });
    }

    default: {
      return state;
    }
  }
};
