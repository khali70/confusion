import { COMMENTS } from "../shared/commets";
import { ADD_COMMENT } from "./ActionTypes";

export const Comments = (state = COMMENTS, { type, payload }) => {
  switch (type) {
    case ADD_COMMENT:
      let comment = payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      // TODO chech if the state changes or make new one
      return [...state, comment];
    default:
      return state;
  }
};
