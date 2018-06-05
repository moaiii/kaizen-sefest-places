// @flow
type SetSelectionAction = { 
  type: string, 
  payload: {
    key: string, 
    value: string
  } 
};

type FilterListAction = {
  type: string, 
  payload: Object
}

export const setSelection = (key: string, value: string): SetSelectionAction => {
  return { 
    type: "SET_SELECTION",
    payload: { key, value } 
  };
}

export const filterList__start = (): FilterListAction => {
  return { 
    type: "FILTER_LIST__START", 
    payload: { } 
  };
}

export const filterList__end = (data: Array<Object>): FilterListAction => {
  return { 
    type: "FILTER_LIST__END", 
    payload: { data } 
  };
}

export const setMobileDrawerVisibility = (isVisible: boolean): FilterListAction => {
  return { 
    type: "SET_MOBILE_DRAWER_VISIBILITY", 
    payload: { isVisible } 
  };
}