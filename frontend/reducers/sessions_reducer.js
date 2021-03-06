import merge from "lodash";

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from "../actions/session_actions";

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

export const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return _.merge({}, state, { currentUser });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_ERRORS:
      const newState = Object.assign({}, state, { errors: [] });
      return newState;
    default:
      return state;
  }
};
