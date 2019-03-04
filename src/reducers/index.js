import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import auth from './authReducer';
import newsletters from './newsletterReducer';
import request from './requestReducer';

const rootReducer = combineReducers({
  form,
  auth,
  newsletters,
  request
});

export default rootReducer;