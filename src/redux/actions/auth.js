import axios from "axios";
import Cookie from "js-cookie";
import { api } from "../../config/api";

export function authLogin(user) {
  return dispatch =>
    axios
      .post(`${api}/auth/local`, {
        identifier: user.username,
        password: user.password
      })
      .then(response => {
        dispatch({
          type: "AUTH_LOGIN",
          payload: { user: response.data.user, token: response.data.jwt }
        });
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch(error => {
        dispatch({
          type: "AUTH_ERROR",
          payload: error.message
        });
        console.log("An error occurred:", error);
      });
}

export function authLogout() {
  return dispatch => {
    Cookie.remove();
    dispatch({ type: "AUTH_LOGOUT" });
  };
}
