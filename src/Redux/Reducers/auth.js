import * as ActionTypes from "../Action/ActionTypes";
import { getStore } from "./Store";

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// TODO util to check if the token is expired.

export const Auth = (
  state = {
    isLoading: false,
    isAuthenticated: getStore("token") ? true : false,
    token: getStore("token"),
    user: getStore("creds") ? JSON.parse(getStore("creds")) : null,
    errMess: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      // trigger lodaing state
      // add user cred to the store
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        user: action.creds,
      };
    case ActionTypes.LOGIN_SUCCESS:
      // stop loading
      // add token to store
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        errMess: "",
        token: action.token,
      };
    case ActionTypes.LOGIN_FAILURE:
      // add error to state
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errMess: action.message,
      };
    case ActionTypes.LOGOUT_REQUEST:
      // DOC why is auth true
      return { ...state, isLoading: true, isAuthenticated: true };
    case ActionTypes.LOGOUT_SUCCESS:
      // reset the state
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: "",
        user: null,
      };
    default:
      return state;
  }
};
