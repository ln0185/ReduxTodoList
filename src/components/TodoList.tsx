import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const { todos, filter } = useSelector((state: RootState) => state.todos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="space-y-2">
      {filteredTodos.length ? (
        filteredTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      ) : (
        <p className="text-gray-500">No to dos found</p>
      )}
    </div>
  );
};

export default TodoList;
