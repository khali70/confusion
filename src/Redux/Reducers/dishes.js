import * as action from "../Action/ActionTypes";

const initState = { isLoading: true, err: null, dishes: [] };

export const Dishes = (state = initState, { type, payload }) => {
  switch (type) {
    case action.ADD_DISHES:
      return { ...state, isLoading: false, err: null, dishes: payload };
    case action.DISHES_LOADING:
      return { ...state, ...initState };
    case action.DISHES_FAILED:
      return { ...state, isLoading: false, err: payload, dishes: [] };

    default:
      return state;
  }
};
