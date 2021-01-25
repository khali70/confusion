/**
- createStore => to create the store then add it inside var
- combineReducers => add meny state to one state
- applyMiddleware => use thirdparty libs
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
// composeWithDevTools => to activate the redux extention in browser
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
// to disptach actions inside another action
import thunk from "redux-thunk";
// redux form handler
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./Form";
// reducers
import { Comments } from "./Reducers/comments";
import { Dishes } from "./Reducers/dishes";
import { Leaders } from "./Reducers/leaders";
import { Promotions } from "./Reducers/promotions";
import { FeedBack } from "./Reducers/feedback";
import { Auth } from "./Reducers/auth";
import { Favorites } from "./Reducers/favorites";

export const ConfigureStore = () => {
  // create the store
  const store = createStore(
    // add all reducers in to one reducer
    combineReducers({
      auth: Auth,
      comments: Comments,
      dishes: Dishes,
      favorites: Favorites,
      feedback: FeedBack,
      leaders: Leaders,
      promotions: Promotions,
      // create the form reducer and store in feedback with init state InitialFeedback
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    // end of combine reucers

    // add middel ware after using DevTooles
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};
