import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";
import axios from "axios";

export const loginApi = (creds) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .post("https://reqres.in/api/login", creds)
    .then((res) => {
      console.log(res.data.token);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
