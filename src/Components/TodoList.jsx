import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, getTodos } from "../store/Todo/todo.action";

const TodoList = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const handleAddTodo = (value) => {
    dispatch(
      addTodos({
        id: Date.now(),
        value: value,
        isCompleted: false,
      })
    );
  };

  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div>
      <h1>TodoList</h1>
      <input
        type="text"
        // value={value}
        placeholder="Enter Something..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleAddTodo(value)}>Add Todo</button>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.value}</div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
