import * as ActionTypes from "../Action/ActionTypes";
import { getStore, setStore } from "./Store";
const dumfav = {
  dishes: [],
};

export const Favorites = (
  state = {
    isLoading: true,
    errMess: null,
    favorites: getStore("favorites")
      ? JSON.parse(getStore("favorites"))
      : dumfav,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITES:
      // add to store
      if (action.payload !== null) {
        setStore("favorites", JSON.stringify(action.payload));
      } else {
        setStore("favorites", JSON.stringify(dumfav));
      }
      // update favorites with payload
      return {
        ...state,
        isLoading: false,
        errMess: null,
        favorites: action.payload,
      };

    case ActionTypes.FAVORITES_LOADING:
      // loading true
      return { ...state, isLoading: true, errMess: null, favorites: dumfav };

    case ActionTypes.FAVORITES_FAILED:
      // errMess: payload
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        favorites: dumfav,
      };

    default:
      return state;
  }
};
