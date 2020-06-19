import {SET_AUTHED_PHONE} from '../actions/authedPhone';

export default function authedPhone(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_PHONE:
      return {
        phoneNumber: action.phoneNumber,
        confirmation: action.confirmation,
      };
    default:
      return state;
  }
}
