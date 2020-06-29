import React, { useState } from "react";

import "./App.scss";

import TodoList from "./components/TodoList";

import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const keyPress = (e) => {
    if (e.key === "Enter") {
      onAddItem();
    }
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const onAddItem = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  const removeItem = (itemIndex) => {
    const filterDone = todos.filter(function (_, index) {
      return index === itemIndex;
    });
    const filterTodos = todos.filter(function (_, index) {
      return index !== itemIndex;
    });
    setTodos(filterTodos);
  };
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <div className="slogan">
        <h1>Pin your work</h1>
        <h2>Get it done</h2>
      </div>

      <div className="flex-input-outer">
        <div className="flex-input-inner">
          <div>
            <input
              autoComplete="off"
              value={inputValue}
              onChange={onChange}
              placeholder="Add a todo.."
              onKeyPress={keyPress}
              className="form__field"
              name="name"
              id="name"
              required
            />
          </div>
          <button className="button" onClick={onAddItem}>
            ADD
          </button>
        </div>
      </div>
      <TodoList todos={todos} removeItem={removeItem} />
    </div>
  );
}

export default App;
