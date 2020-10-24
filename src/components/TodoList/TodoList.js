import React from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem';
function TodoList(){
    const todos = [
        'Item1', 'Item2', 'Item3', 'Item4', 'Item5'
    ];

    const todoItem = todos.map(function(item){
        return <TodoItem todoText={item} />
    });
    return(
        <ul className="todoList">
            { todoItem }
        </ul>
    )
}
export default TodoList;