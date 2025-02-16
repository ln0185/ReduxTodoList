import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center p-2 border-b">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
        className="mr-2 cursor-pointer"
      />

      <span
        onClick={() => dispatch(toggleTodo(id))}
        className={`cursor-pointer flex-1 ${
          completed ? "line-through text-gray-500" : ""
        }`}
      >
        {text}
      </span>

      <button
        onClick={() => dispatch(deleteTodo(id))}
        className="bg-gray-500 text-white px-2 py-1 rounded"
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
