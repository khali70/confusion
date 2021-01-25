import * as action from "../Action/ActionTypes";
const initState = { err: null, comments: [] };

export const Comments = (state = initState, { type, payload }) => {
  switch (type) {
    case action.ADD_COMMENTS:
      // update the comment arr with the payload
      return { ...state, isLoading: false, err: null, comments: payload };
    case action.COMMENTS_FAILED:
      // update error with payload
      return { ...state, isLoading: false, err: payload, comments: [] };
    case action.ADD_COMMENT:
      // concat payloads with the comments arr
      // DOC why use concat
      let comment = payload;
      return { ...state, comments: state.comments.concat(comment) };
    default:
      return state;
  }
};
