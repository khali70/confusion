import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { createForms } from "react-redux-form";

import { InitialFeedback } from "./Form";
import { Comments } from "./Reducers/comments";
import { Dishes } from "./Reducers/dishes";
import { Leaders } from "./Reducers/leaders";
import { Promotions } from "./Reducers/promotions";
import { FeedBack } from "./Reducers/feedback";
import { Auth } from "./Reducers/auth";
import { Favorites } from "./Reducers/favorites";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      auth: Auth,
      comments: Comments,
      dishes: Dishes,
      favorites: Favorites,
      feedback: FeedBack,
      leaders: Leaders,
      promotions: Promotions,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};
