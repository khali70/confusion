import * as action from "./ActionTypes";
import { URL } from "../../shared/baseURL";
//Action creators

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
export const addComment = (comment) => ({
  type: action.ADD_COMMENT,
  payload: comment,
});
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId,
    rating,
    author,
    comment,
    date: new Date().toISOString(),
  };
  return fetch(`${URL}comments`, {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
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
    .then((res) => dispatch(addComment(newComment)))
    .catch((err) => {
      console.log("POST comment");
      console.log(err);
    });
};
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
// TODO postFeedback() action at  http://localhost:3001/feedback
export const postFeedback = (values) => (dispatch) => {
  return fetch(`${URL}feedback`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
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
    .then(() => dispatch(getlastfeed()))
    .catch((err) => {
      console.log("postFeedback");
      console.log(err);
    });
};
export const getlastfeed = () => ({
  type: action.GET_FEED,
});
