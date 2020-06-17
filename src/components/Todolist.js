import React, { Component } from 'react';
import '../App.scss';
import App from '../App';
import Todoitem from './Todoitem';

// class Todolist extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items : [
    
//             ],
//             inputvalue : ""
//         };
//     }
//     // onAddTodo = () => {
//     //     this.state.item.push(this.refs.item.value)
//     //     };
//     onAddTodo = () => {
//         if(this.state.inputvalue) {
//             // const a = this.state.items
//             // a.push(this.state.inputvalue)
//             console.log(this.state.items)
//             this.setState({items: [...this.state.items,this.state.inputvalue], inputvalue: ""})
//         }
//         // console.log('jav')
//     }
//     onChange = (e) => {
//         this.setState({inputvalue: e.target.value})
//     }
//     removeItem = (item) => {
//         const filterTodos = this.state.items.filter(function (value) {
//           return value !== item;
//         });
//         this.setState({items: filterTodos})
//       }
    
//     render() {
//         const elements = this.state.items.map((item, index) => (
//             <div>
//                  <li key={index}>
//                 {item}
//                 </li>
//                 <button onClick = { () => this.removeItem(item)}>X</button>
//             </div>
           
//           ));
//         console.log(elements)
//         return(

//             <div>
//                 <h2>Todo List</h2>
//                 <div>
                    
//                     <input type="text" placeholder="Add a todo.." value = {this.state.inputvalue} onChange = {this.onChange}></input>
//                     <button onClick = {this.onAddTodo}>Add</button>
                    
//                 </div>
//                 <div>
//                     <ul>
//                        {elements}
//                     </ul>
//                 </div>
//             </div>
//         );
//     }
// }


//export default Todolist;