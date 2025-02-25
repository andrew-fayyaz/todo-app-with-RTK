import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="grid place-items-center pt-10 px-3">
      <h1 className="text-3xl font-bold">Todo App with Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
