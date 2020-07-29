import * as action from "./ActionTypes";
import { URL } from "../../shared/baseURL";
// TODO hndel the errors in the project
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let err = new Error(
            "error" + response.status + " : " + response.statusText
          );
          err.response = response;
          throw err;
        }
      },
      (err) => {
        let errMsg = new Error(err.message);
        throw errMsg;
      }
    )
    .then((res) => res.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((err) => dispatch(dishesFailed(err.message)));
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let err = new Error(
            "error" + response.status + " : " + response.statusText
          );
          err.response = response;
          throw err;
        }
      },
      (err) => {
        let errMsg = new Error(err.message);
        throw errMsg;
      }
    )
    .then((res) => res.json(res))
    .then((comments) => dispatch(addComments(comments)))
    .catch((err) => dispatch(commentsFailed(err.message)));
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let err = new Error(
            "error" + response.status + " : " + response.statusText
          );
          err.response = response;
          throw err;
        }
      },
      (err) => {
        let errMsg = new Error(err.message);
        throw errMsg;
      }
    )
    .then((res) => res.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((err) => dispatch(promosFailed(err.message)));
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let err = new Error(
            "error" + response.status + " : " + response.statusText
          );
          err.response = response;
          throw err;
        }
      },
      (err) => {
        let errMsg = new Error(err.message);
        throw errMsg;
      }
    )
    .then((res) => res.json())
    .then((leaders) => dispatch(addLeaders(leaders)))
    .catch((err) => dispatch(LeadersFailed(err.message)));
};

export const addLeaders = (leaders) => ({
  type: action.ADD_LEADERS,
  payload: leaders,
});
export const LeaderssLoading = () => ({
  type: action.LEADERS_LOADING,
});

export const LeadersFailed = (errmess) => ({
  type: action.LEADERS_FAILED,
  payload: errmess,
});
