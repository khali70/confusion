import * as action from "./ActionTypes";
import { URL } from "../../shared/baseURL";
import { deleteStore } from "../Reducers/Store";
//$ dishes ---------------------------------------------------------------------------
/**
 * - dispatch loading
 * - fetch dish
 * - dispatch addDish || dishErr
 */
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

/**
 * dishpatch loading state true
 */
export const dishesLoading = () => ({
  type: action.DISHES_LOADING,
});

/**
 * dispatsh error with payload err string
 */
export const dishesFailed = (err) => ({
  type: action.DISHES_FAILED,
  payload: err,
});
/**
 *
 * @param {dishes} dishes dishes to add to the state
 */
export const addDishes = (dishes) => {
  return {
    type: action.ADD_DISHES,
    payload: dishes,
  };
};
//$ comments ---------------------------------------------------------------------------
/**
 * - fetch comment
 * - addcomment || comment faild
 */
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
/**
 * @param {string} errmess
 */
export const commentsFailed = (errmess) => ({
  type: action.COMMENTS_FAILED,
  payload: errmess,
});
/**
 * @param {comments} comments
 */
export const addComments = (comments) => ({
  type: action.ADD_COMMENTS,
  payload: comments,
});
/**
 * @param {comment} comment
 */
export const addComment = (comment) => ({
  type: action.ADD_COMMENT,
  payload: comment,
});

/**
 * @param {string} dishId the id of the dish
 * @param {number} rating the rating of the dish by the user
 * @param {string } comment the comment msg
 * sendcomment to the db
 * `then` add the comment to the state
 */
export const postComment = (dishId, rating, comment) => (dispatch) => {
  const newComment = {
    dishId,
    rating,
    comment,
  };
  return fetch(`${URL}comments`, {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let err = new Error(
            "eror" + response.status + " : " + response.statusText
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
    .then((response) => response.json())
    .then((response) => dispatch(addComment(response)))
    .catch((err) => {
      console.log("POST comment");
      console.log(err);
    });
};
// $ promotions ---------------------------------------------------------------------------
/**
 * - PromoLoading
 * - fetch promo from db
 * - addPromo || PromoFaild
 */
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
/**
 * @param {promos} promos the promos
 */
export const addPromos = (promos) => ({
  type: action.ADD_PROMOS,
  payload: promos,
});
// $ Leaders ---------------------------------------------------------------------------
/**
 * - fetch leader
 * - add || error
 */
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
/**
 *
 * @param {leaders} leaders the leadres data
 */
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
// $ feedback ---------------------------------------------------------------------------
/**
 *
 * @param {feedback} values
 */
export const postFeedback = (values) => (dispatch) => {
  return fetch(`${URL}feedback`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
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
        throw err;
      }
    )
    .then((response) => response.json())
    .then((response) => {
      console.log("Feedback", response);
      alert("Thank you for your feedback :)\n" + JSON.stringify(response));
    })
    .catch((error) => {
      console.log("Feedback", error.message);
      alert("Your feedback could not be posted\nError: " + error.message);
    });
};
export const getlastfeed = () => ({
  type: action.GET_FEED,
});
// $ users ---------------------------------------------------------------------------
/**
 * @param {creds} creds credntional of the user
 */
export const requestLogin = (creds) => {
  return {
    type: action.LOGIN_REQUEST,
    creds,
  };
};
/**
 * @param {creds} creds
 */
export const loginUser = (creds) => (dispatch) => {
  // We dispatch requestLogin to kickoff the call to the API
  dispatch(requestLogin(creds));

  return fetch(URL + "users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: `${URL}`,
    },
    body: JSON.stringify(creds),
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => {
      // TODO move the res to sparate function
      if (response.success) {
        if (creds.rememberMe) {
          // If login was successful, set the token in local storage
          localStorage.setItem("creds", JSON.stringify(creds));
          localStorage.setItem("token", response.token);
        } else {
          sessionStorage.setItem("creds", JSON.stringify(creds));
          sessionStorage.setItem("token", response.token);
        }
        // Dispatch the success action
        dispatch(fetchFavorites());
        dispatch(receiveLogin(response));
      } else {
        var error = new Error("Error " + response.status);
        error.response = response;
        throw error;
      }
    })
    .catch((error) => dispatch(loginError(error.message)));
};

export const receiveLogin = (response) => {
  return {
    type: action.LOGIN_SUCCESS,
    token: response.token,
  };
};

export const loginError = (message) => {
  return {
    type: action.LOGIN_FAILURE,
    message,
  };
};

export const requestLogout = () => {
  return {
    type: action.LOGOUT_REQUEST,
  };
};

export const receiveLogout = () => {
  return {
    type: action.LOGOUT_SUCCESS,
  };
};

/**
 * log user out and delete stored data about user
 */
export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  deleteStore("token");
  deleteStore("creds");
  deleteStore("favorites");
  dispatch(favoritesFailed("Error 401: Unauthorized"));
  dispatch(receiveLogout());
};
// $ favorites -----------------------------------------------------------------------
/**
 * add favorites dish to the db
 */
export const postFavorite = (dishId) => (dispatch) => {
  return fetch(URL + "favorites/" + dishId, {
    method: "POST",
    body: JSON.stringify([dishId]),
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((favorites) => {
      console.log("Favorite Added", favorites);
      dispatch(addFavorites(favorites));
    })
    .catch((error) => console.log(error));
};
/**
 * take dishid and delet it from the favorites db of the user
 */
export const deleteFavorite = (dishId) => (dispatch) => {
  return fetch(URL + "favorites/" + dishId, {
    method: "DELETE",
    headers: {
      Authorization: getToken(),
      "Access-Control-Allow-Origin": `${URL}"favorites/${dishId}`,
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((favorites) => {
      console.log("Favorite Deleted", favorites);
      dispatch(addFavorites(favorites));
    })
    .catch((error) => console.log(error));
};
/**
 * fetch favorites dish from the server
 */
export const fetchFavorites = () => (dispatch) => {
  dispatch(favoritesLoading(true));

  return fetch(URL + "favorites", {
    headers: {
      Authorization: getToken(),
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((favorites) => dispatch(addFavorites(favorites)))
    .catch((error) => dispatch(favoritesFailed(error.message)));
};

export const favoritesLoading = () => ({
  type: action.FAVORITES_LOADING,
});

export const favoritesFailed = (errmess) => ({
  type: action.FAVORITES_FAILED,
  payload: errmess,
});

export const addFavorites = (favorites) => ({
  type: action.ADD_FAVORITES,
  payload: favorites,
});

/**
 * get the token from the storge
 */
const getToken = () => {
  if (localStorage.getItem("token")) {
    return `Bearer ${localStorage.getItem("token")}`;
  } else {
    return `Bearer ${sessionStorage.getItem("token")}`;
  }
};
