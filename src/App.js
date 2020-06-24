import React, { useState } from 'react';
import Header from './components/Header';
import './App.scss';
import Todolist2 from './components/Todolist2';
function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const keyPress = (e) => {
    if(e.keyCode == 13){
      onAddItem();
    }
  }
  const onChange = (e) => {
    setInputValue(e.target.value);
  }
  const onAddItem = () => {
    setTodos([...todos,inputValue]);
    setInputValue("");
  }
  const removeItem = (itemIndex) => {
    const filterTodos = todos.filter(function(_, index) {
      return index !== itemIndex;
    });
    setTodos(filterTodos);
    }
  return (
    <div>
      <img></img>
      <Header />
      <input value={inputValue} onChange={onChange} placeholder = "Add a todo.." onKeyPress={keyPress}/>
      <button onClick={onAddItem}>Add</button>
      <Todolist2 todos={todos} removeItem = {removeItem} />
    </div>
 
  
  );
}

export default App;
