import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TodoForm: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Add a to do..."
      />
      <button type="submit" className="bg-gray-500 text-white p-2 rounded">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
