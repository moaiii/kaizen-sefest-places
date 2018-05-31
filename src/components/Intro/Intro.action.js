// @flow
type Action = { 
  +type: string, 
  +payload: Object
};

export const fetchData = (): Action => {
  return {
    type: "FETCH_DATA",
    payload: { }
  };
}

export const fetchData__pending = (): Action => {
  return {
    type: "FETCH_DATA__PENDING",
    payload: { }
  };
}

export const fetchData__resolved = (data: Array<Object>, type: string): Action => {
  return { 
    type: "FETCH_DATA__RESOLVED", 
    payload: { data, type }
  };
}

export const fetchData__error = (error: Object): Action => {
  return { 
    type: "FETCH_DATA__ERROR", 
    payload: { error }
  };
}
