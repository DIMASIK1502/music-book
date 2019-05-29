import axios from "axios";
import { api } from "../../config/api";

export function uploadMusic(values) {
  const config = {
    headers: {
      Accept: "application/json"
    }
  };

  const data = {
    ...values
  };

  return () => axios.post(`${api}/music`, data, config);
}

export function getMyMusic() {
  return dispatch => {
    axios.get(`${api}/music`).then(res => {
      dispatch({ type: "GET_MY_MUSIC", payload: res.data });
    });
  };
}
