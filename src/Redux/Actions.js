import * as action from "./ActionTypes";
import { DISHES } from "../shared/dishes";
//Action creators
export const addComment = (dishId, rating, author, comment) => ({
  type: action.ADD_COMMENT,
  payload: {
    dishId,
    rating,
    author,
    comment,
  },
});
export const fetchDishes = (payload) => (dispatch) => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 5000);
};
export const dishesLoading = () => ({
  type: action.DISHES_LOADING,
});
export const dishesFailed = (err) => ({
  type: action.DISHES_FAILED,
  payload: err,
});
export const addDishes = (dishes) => ({
  type: action.ADD_DISHES,
  payload: dishes,
});
// export const actionName = (payload) => ({
//     type: type,
//     payload
// })
