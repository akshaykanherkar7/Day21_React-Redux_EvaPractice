import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

const initialState = {
  loading: false,
  error: false,
  isAuth: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return { loading: true, error: false, isAuth: false };
    }

    case LOGIN_SUCCESS: {
      return { loading: false, isAuth: true, error: false };
    }

    case LOGIN_ERROR: {
      return { loading: false, error: true, isAuth: false };
    }

    case LOGOUT: {
      return { loading: false, error: false, isAuth: false };
    }
    default:
      return state;
  }
};
