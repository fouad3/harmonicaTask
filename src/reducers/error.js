import {SET_ERROR, CLEAR_ERROR} from '../actions/error';

export default function loading(state = {}, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        [action.error.type]: action.error.message,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        [action.errorType]: '',
      };
    default:
      return state;
  }
}
