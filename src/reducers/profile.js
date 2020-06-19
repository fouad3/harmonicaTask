import {SET_PROFILE} from '../actions/profile';

export default function profile(state = {}, action) {
  switch (action.type) {
    case SET_PROFILE:
      return action.profileData;
    default:
      return state;
  }
}
