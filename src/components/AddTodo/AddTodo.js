import React from 'react';
import './AddTodo.css';

function AddTodo(){
    return(
        <div className="addTodo">
            <label>
                <input type="text" placeholder="Add Task"/>
            </label>
            <button><i class="fas fa-plus"></i></button>
        </div>
    )
}
export default AddTodo;