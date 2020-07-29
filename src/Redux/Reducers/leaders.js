import * as action from "../Action/ActionTypes";

const initState = { isLoading: true, err: null, leaders: [] };

export const Leaders = (state = initState, { type, payload }) => {
  switch (type) {
    case action.ADD_LEADERS:
      return { ...state, isLoading: false, err: null, leaders: payload };
    case action.LEADERS_LOADING:
      return { ...state, ...initState };
    case action.LEADERS_FAILED:
      return { ...state, isLoading: false, err: payload, leaders: [] };
    default:
      return state;
  }
};
