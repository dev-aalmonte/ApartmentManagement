import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import auth from './authReducer';
import newsletters from './newsletterReducer';
import request from './requestReducer';
import header from './headerReducer';

const rootReducer = combineReducers({
  form,
  auth,
  newsletters,
  request, 
  header
});

export default rootReducer;