import * as action from "../Action/ActionTypes";

const initState = { isLoading: true, err: null, leaders: [] };

export const Leaders = (state = initState, { type, payload }) => {
  switch (type) {
    case action.ADD_LEADERS:
      // update the leaders arr with the payload
      return { ...state, isLoading: false, err: null, leaders: payload };
    case action.LEADERS_LOADING:
      // return state to default
      return { ...state, ...initState };
    case action.LEADERS_FAILED:
      // err:payload
      return { ...state, isLoading: false, err: payload, leaders: [] };
    default:
      return state;
  }
};
