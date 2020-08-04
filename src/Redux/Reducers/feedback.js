import * as action from "../Action/ActionTypes";
import { URL } from "../../shared/baseURL";

const initState = { err: null, feed: [] };

export const FeedBack = (state = initState, { type }) => {
  switch (type) {
    case action.GET_FEED:
      let responce;
      fetch(`${URL}feedback`)
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
        .then((res) => {
          console.log(res);
          return res.json(res);
        })
        .catch((err) => alert(err));
      console.log(responce);
      return { ...state, feed: [...responce] };
    default:
      return state;
  }
};
