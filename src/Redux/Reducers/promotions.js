import * as action from "../Action/ActionTypes";
const initState = { err: null, promotions: [] };

export const Promotions = (state = initState, { type, payload }) => {
  switch (type) {
    case action.ADD_PROMOS:
      // update the promotions arr with the payload
      return { ...state, isLoading: false, err: null, promotions: payload };
    case action.PROMOS_FAILED:
      // err: payload
      return { ...state, isLoading: false, err: payload, promotions: [] };
    case action.PROMOS_LOADING:
      // reset state
      return { ...state, ...initState };
    default:
      return state;
  }
};
