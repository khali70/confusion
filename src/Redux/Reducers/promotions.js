import * as action from "../Action/ActionTypes";
const initState = { err: null, promotions: [] };

export const Promotions = (state = initState, { type, payload }) => {
  switch (type) {
    case action.ADD_PROMOS:
      return { ...state, isLoading: false, err: null, promotions: payload };
    case action.PROMOS_FAILED:
      return { ...state, isLoading: false, err: payload, promotions: [] };
    case action.PROMOS_LOADING:
      return { ...state, ...initState };
    default:
      return state;
  }
};
