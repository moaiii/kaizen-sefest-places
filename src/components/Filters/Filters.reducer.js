// @flow
type State = {
  +category: string,
  +subCategory: string,
  +location: string,
  +filtered: boolean,
  +filteredData: Array<Object>,
  +mobileDrawerVisibility: boolean
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
  filteredData: [],
  mobileDrawerVisibility: false
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

  case "SET_MOBILE_DRAWER_VISIBILITY": {
    return Object.assign({}, state, {
      mobileDrawerVisibility: action.payload.isVisible
    })
  }

  case "CLEAR_LIST": {
    return Object.assign({}, state, {
      filteredData: []
    })
  }

  default: {
      return state;
    }
  }
};
