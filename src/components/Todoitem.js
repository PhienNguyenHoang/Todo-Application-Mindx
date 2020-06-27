import React from 'react';
import '../App.scss';

function Todoitem(props) {
    const {todo, index, removeItem} = props;

    return(
        
           <div className="flex-todoItem">
                <div className="li-container">
                    <li>
                        {todo}
                    </li>
                </div>
                <div className="li-button">
                    <button onClick = {() => {removeItem(index)}}>X</button>
                </div>
               
           </div>
    
    );

}
export default Todoitem;
