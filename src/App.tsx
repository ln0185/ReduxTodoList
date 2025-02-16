import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

const App: React.FC = () => {
  return (
    <div className="flex">
      <div className="justify-content">
        <h1 className="text-2xl font-bold text-center mb-4">To do List</h1>
        <TodoForm />
        <TodoList />
        <FilterButtons />
      </div>
    </div>
  );
};

export default App;
