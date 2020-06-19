import {showLoading, hideLoading} from './loading';
import {getProfile} from '../utils/Api';

export const SET_PROFILE = 'SET_PROFILE';

export function getProfileData() {
  return dispatch => {
    dispatch(showLoading());
    getProfile().then(profileData => {
      dispatch(setProfile(profileData));
      dispatch(hideLoading());
    });
  };
}

export function setProfile(profileData) {
  return {
    type: SET_PROFILE,
    profileData,
  };
}
