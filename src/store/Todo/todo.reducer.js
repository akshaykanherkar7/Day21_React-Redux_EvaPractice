import { ADD_TODOS, GET_TODOS } from "./todo.types";

export const todoReducer = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case ADD_TODOS: {
      return { ...state, todos: [...state.todos, payload] };
    }

    case GET_TODOS: {
      return { ...state, todos: payload };
    }
    default:
      return state;
  }
};
