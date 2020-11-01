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
      if (action.payload !== null) {
        setStore("favorites", JSON.stringify(action.payload));
      } else {
        setStore("favorites", JSON.stringify(dumfav));
      }
      return {
        ...state,
        isLoading: false,
        errMess: null,
        favorites: action.payload,
      };

    case ActionTypes.FAVORITES_LOADING:
      return { ...state, isLoading: true, errMess: null, favorites: dumfav };

    case ActionTypes.FAVORITES_FAILED:
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
