import axios from "axios";
import { ADD_TODOS, GET_TODOS } from "./todo.types";

export const addTodos = (value) => (dispatch) => {
  axios.post("http://localhost:8080/todos", value).then((res) => {
    dispatch({ type: ADD_TODOS, payload: res.data });
  });
};

export const getTodos = () => (dispatch) => {
  axios.get("http://localhost:8080/todos").then((res) => {
    dispatch({ type: GET_TODOS, payload: res.data });
  });
};
