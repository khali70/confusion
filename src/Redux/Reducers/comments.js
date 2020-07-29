import * as action from "../Action/ActionTypes";
const initState = { err: null, comments: [] };
export const Comments = (state = initState, { type, payload }) => {
  switch (type) {
    case action.ADD_COMMENTS:
      return { ...state, isLoading: false, err: null, comments: payload };
    case action.COMMENTS_FAILED:
      return { ...state, isLoading: false, err: payload, comments: [] };
    case action.ADD_COMMENT:
      console.log(payload);
      let comment = payload;
      return { ...state, comments: state.comments.concat(comment) };
    default:
      return state;
  }
};
