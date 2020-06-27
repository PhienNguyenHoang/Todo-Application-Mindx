import React from 'react';
import '../App.scss';
import Todoitem from './Todoitem';

function Todolist2(props) {
    const {todos, removeItem} = props;
    const list = todos.map((todo, index) => (
        <Todoitem todo = {todo} key = {index} index = {index} removeItem = {removeItem}/>
    ));
    return(
        <div className="todoList-container">
            <ul className="ul">
                <div>
                    {list}
                </div>
                
            </ul>
        </div>
    );
}
export default Todolist2;
