// @flow
type State = {
  +category: string,
  +subCategory: string,
  +location: string,
  +filtered: boolean,
  +filteredData: Array<Object>
};

type Action = {
 +type: string,
 +payload: any
}

let initialState = {
  category: '',
  subCategory: '',
  location: 'uk',
  filtering: false,
  filtered: false,
  filteredData: []
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {

  case "SET_SELECTION": {
    if(action.payload.key === 'category') {
      return Object.assign({}, state, { category: action.payload.value })
    }
    if(action.payload.key === 'subcategory') {
      return Object.assign({}, state, { subCategory: action.payload.value })
    }
    if(action.payload.key === 'location') {
      return Object.assign({}, state, { location: action.payload.value })
    }
  }

  case "FILTER_LIST__START": {
    return Object.assign({}, state, { 
      filtering: true 
    })
  }

  case "FILTER_LIST__END": {
    return Object.assign({}, state, { 
      filtering: false,
      filtered: true,
      filteredData: action.payload.data
    })
  }

  default: {
      return state;
    }
  }
};
