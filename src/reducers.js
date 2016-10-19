import { combineReducers } from 'redux';

import * as t from './actionTypes';
import * as m from './initialStates';

const username = (state = m.usernameInitialState, action) => {
  if (action.type === t.USERNAME_CHANGE) {
    return action.username;
  }
  return state;
};

export default combineReducers({
  username,
});
