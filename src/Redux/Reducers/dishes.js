import * as action from "../Action/ActionTypes";

const initState = { isLoading: true, err: null, dishes: [] };

export const Dishes = (state = initState, { type, payload }) => {
  switch (type) {
    case action.ADD_DISHES:
      // update the dishes arr with the payload
      return { ...state, isLoading: false, err: null, dishes: payload };
    case action.DISHES_LOADING:
      // isloading true
      return { ...state, ...initState };
    case action.DISHES_FAILED:
      // update error with payload
      return { ...state, isLoading: false, err: payload, dishes: [] };

    default:
      return state;
  }
};
