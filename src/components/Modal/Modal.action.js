// @flow
type Action = { type: string, payload: boolean };

export const setModalVisibility = (value: boolean): Action => {
  return { 
    type: "SET_MODAL_VISIBILITY", 
    payload: value 
  };
}
