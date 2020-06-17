import React from 'react';
import '../App.scss';

function Todoitem(props) {
    const {todo, index, removeItem} = props;

    return(
        <div>
            <li>
                {todo}
            </li>
            <button onClick = {() => {removeItem(index)}}>X</button>
        </div>
    );

}
export default Todoitem;
