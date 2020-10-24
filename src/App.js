import React from 'react';
import './App.css';
import Title from './components/Title';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App(){
    return (
        <div className="App">
            <Title />
            <SearchPanel />
            <TodoList />
            <AddTodo />
        </div>     
    );
};

export default App;