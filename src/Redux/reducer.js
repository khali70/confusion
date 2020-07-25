import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/commets";
import { PROMOTIONS } from "../shared/poromotion";
import { LEADERS } from "../shared/leaders";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
