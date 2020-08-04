import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";

import { InitialFeedback } from "./Form";
import { Comments } from "./Reducers/comments";
import { Dishes } from "./Reducers/dishes";
import { Leaders } from "./Reducers/leaders";
import { Promotions } from "./Reducers/promotions";
import { FeedBack } from "./Reducers/feedback";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      feedback: FeedBack,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};
