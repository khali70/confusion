import * as action from "../Action/ActionTypes";

const initState = { isLoading: true, err: null, leaders: [] };

export const Leaders = (state = initState, { type, payload }) => {
  switch (type) {
    case action.ADD_LEADERS:
      return { ...state, isLoading: false, err: null, leaders: payload };
    default:
      return state;
  }
};
