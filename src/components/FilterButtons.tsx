import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/todoSlice";
import { RootState } from "../redux/store";

const FilterButtons: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.todos.filter);

  return (
    <div className="flex gap-2 mt-4">
      {["all", "completed", "incomplete"].map((f) => (
        <button
          key={f}
          onClick={() =>
            dispatch(setFilter(f as "all" | "completed" | "incomplete"))
          }
          className={`p-2 rounded ${
            filter === f ? "bg-gray-500 text-white" : "bg-gray-200"
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
