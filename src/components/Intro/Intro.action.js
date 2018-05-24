// @flow
type Action = { 
  +type: string, 
  +payload: Object
};

export const fetchData = (url: string): Action => {
  return {
    type: "FETCH_DATA",
    payload: { url }
  };
}

export const fetchData__pending = (): Action => {
  return {
    type: "FETCH_DATA__PENDING",
    payload: { }
  };
}

export const fetchData__resolved = (data: Array<Object>): Action => {
  return { 
    type: "FETCH_DATA__RESOLVED", 
    payload: { data }
  };
}

export const fetchData__error = (error: Object): Action => {
  return { 
    type: "FETCH_DATA__ERROR", 
    payload: { error }
  };
}
