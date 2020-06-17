// import React, { useState } from 'react';
// import Header from './components/Header';
// import './App.scss';
// import Todolist2 from './components/Todolist2';
// function App2() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const onChange = (e) => {
//     setInputValue(e.target.value);
//     console.log(inputValue);
//   }
//   const onAddItem = () => {
//     setTodos([...todos,inputValue]);
//     setInputValue("");
//   }
//   const removeItem = (item) => {
//     const filterTodos = todos.filter(function(value) {
//       return value !== item
//     })};
//   return (
//     <div>
//       <Header />
//       <input value = {inputValue} onChange = {onChange} placeholder = "Add a todo.."/>
//       <button onClick = {onAddItem}>Add</button>
//       <Todolist2 todos = {todos} removeItem = {removeItem} />
//     </div>
 
  
//   );
// }

// export default App2;
