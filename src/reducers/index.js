import {combineReducers} from 'redux';
import profile from './profile';
import authedPhone from './authedPhone';
import loading from './loading';
import error from './error';

export default combineReducers({
  profile,
  authedPhone,
  loading,
  error,
});
