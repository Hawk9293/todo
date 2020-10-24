import React from 'react';
import './TodoItem.css';
function  TodoItem(props){
    const todoText = props.todoText;
    return(
        <li className="todoItem">
            <div className="todoItem__checkBox">
                <i class="fas fa-check"></i>     
            </div>
            <p className="todoItem__text">{ todoText }</p>
            <button className="todoItem__delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </li>
    )
}

export default TodoItem;