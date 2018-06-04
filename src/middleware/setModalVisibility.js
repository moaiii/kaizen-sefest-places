
import * as actions from '../components/Modal/Modal.action';

export const setModalVisibility = (store: Function, next: Function, action: Function) => {
  store.dispatch(actions.setModalVisibility(action.payload));
  next(action);
}