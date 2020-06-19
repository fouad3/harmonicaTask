import auth from '@react-native-firebase/auth';
import {showLoading, hideLoading} from './loading';
import {setError, clearError} from './error';
import * as navigation from '../navigation/NavRef';

export const SET_AUTHED_PHONE = 'SET_AUTHED_PHONE';

export function signInWithPhoneNumber(phoneNumber) {
  return dispatch => {
    dispatch(showLoading());
    auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(confirmation => {
        dispatch(setAuthedPhone(phoneNumber, confirmation));
        dispatch(hideLoading());
        navigation.navigate('VerifyCode');
      });
  };
}

export function confirmCode(code) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    dispatch(clearError('code'));
    getState()
      .authedPhone.confirmation.confirm(code)
      .then(() => {
        dispatch(hideLoading());
        navigation.navigate('Discover', {screen: 'Profile'});
      })
      .catch(() => {
        dispatch(hideLoading());
        dispatch(
          setError({
            type: 'code',
            message: 'Invalid code.',
          }),
        );
      });
  };
}

export function setAuthedPhone(phoneNumber, confirmation) {
  return {
    type: SET_AUTHED_PHONE,
    phoneNumber,
    confirmation,
  };
}
