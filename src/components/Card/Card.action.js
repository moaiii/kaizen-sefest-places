// @flow
type FooAction = { 
  type: "SET_SELECTED_CITY", 
  payload: Object 
};

export const setSelectedCity = (name: string, rank: number): FooAction => {
  return { 
    type: "SET_SELECTED_CITY", 
    payload: { name, rank } 
  };
}
