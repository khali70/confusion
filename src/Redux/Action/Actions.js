import * as action from "./ActionTypes";
import { DISHES } from "../../shared/dishes";
import { URL } from "../../shared/baseURL";
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
// dishes
export const fetchDishes = (payload) => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(`${URL}dishes`)
    .then((res) => res.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((err) => console.log(err));
};
export const dishesLoading = () => ({
  type: action.DISHES_LOADING,
});
export const dishesFailed = (err) => ({
  type: action.DISHES_FAILED,
  payload: err,
});
export const addDishes = (dishes) => {
  return {
    type: action.ADD_DISHES,
    payload: dishes,
  };
};
// comments
export const fetchComments = () => (dispatch) => {
  return fetch(`${URL}comments`)
    .then((res) => res.json(res))
    .then((comments) => dispatch(addComments(comments)));
};
export const commentsFailed = (errmess) => ({
  type: action.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments) => ({
  type: action.ADD_COMMENTS,
  payload: comments,
});
// promotions
export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading());

  return fetch(`${URL}promotions`)
    .then((res) => res.json())
    .then((promos) => dispatch(addPromos(promos)));
};

export const promosLoading = () => ({
  type: action.PROMOS_LOADING,
});

export const promosFailed = (errmess) => ({
  type: action.PROMOS_FAILED,
  payload: errmess,
});

export const addPromos = (promos) => ({
  type: action.ADD_PROMOS,
  payload: promos,
});
// Leaders
export const fetchLeaders = () => (dispatch) => {
  // dispatch(promosLoading());

  return fetch(`${URL}leaders`)
    .then((res) => res.json())
    .then((leaders) => dispatch(addLeaders(leaders)));
};

export const addLeaders = (leaders) => ({
  type: action.ADD_LEADERS,
  payload: leaders,
});
