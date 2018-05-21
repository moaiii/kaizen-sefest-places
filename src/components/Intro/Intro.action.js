// @flow
type InitAction = { type: string, payload: string };

type Action =
  | InitAction;

export const initialise = (): Action => {
  return { 
    type: "INITIALISE", 
    payload: 'https://api.github.com/users/moaiii/repos' 
  };
}

export const startInit = (): Action => {
  return { 
    type: "INITIALISE__PENDING", 
    payload: '' 
  };
}

export const resolved = (json: Array): Action => {
  return { 
    type: "INITIALISE__RESOLVED", 
    payload: json
  };
}
