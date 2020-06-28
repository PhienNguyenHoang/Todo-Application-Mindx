import React, { useState } from "react";

import "./App.scss";

import Todolist2 from "./components/Todolist2";

import Navbar from './components/Navbar';
function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [done, setDone] = useState([]);


  const keyPress = (e) => {
    if (e.key === 'Enter') {
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
    console.log(todos);
    setDone([...done, filterDone]);
    setTimeout(() => console.log(done), 3000);
  };
  return (
    <div className="container">
      <Navbar />
      <div className="flex-input-outer">
        <div className="flex-input-inner">
          <div>
            <input
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
          <button className="button" onClick={onAddItem}>ADD</button>
        </div>
      </div>
      <Todolist2 todos={todos} removeItem={removeItem} />
    </div>
  );
}

export default App;
