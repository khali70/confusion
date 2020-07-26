import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/commets";
import { PROMOTIONS } from "../shared/poromotion";
import { LEADERS } from "../shared/leaders";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
  Form: {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "Tel.",
    message: "",
    touched: {
      firstname: false,
      lastname: false,
      telnum: false,
      email: false,
      agree: false,
      contactType: false,
      message: false,
    },
  },
};

export const Reducer = (state = initialState, action) => {
  return state;
};
