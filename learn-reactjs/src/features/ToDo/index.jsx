import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './styles.scss';

TodoFeature.propTypes = {

};

function TodoFeature() {
    const initTodoList = [
        { id: 1, title: 'Eat', status: 'new' },
        { id: 2, title: 'Code', status: 'completed' },
        { id: 3, title: 'Sleep', status: 'new' },
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filter, setFilter] = useState('all');
    console.log(filter);

    const handleTodoClick = (todo, idx) => {
        console.log(todo, idx);
        // clone array
        let clonedArray = [...todoList];
        // let selectedId = clonedArray.findIndex(item => item.id === todo.id);

        // console.log(selectedId, idx);

        // toggle status
        clonedArray[idx] = {
            ...clonedArray[idx],
            status: clonedArray[idx].status === 'new' ? 'completed' : 'new',
        }

        // set state
        setTodoList(clonedArray);
    }

    const handleShowAllClick = () => {
        setFilter('all');
    };
    const handleShowNewClick = () => {
        setFilter('new');
    };
    const handleShowCompletedClick = () => {
        setFilter('completed');
    };

    const filteredTodoList = todoList.filter(todo => filter === 'all' || todo.status === filter);

    return (
        <div className="todo-page">
            <h3>Todos</h3>
            <TodoList todoList={filteredTodoList} onTodoClick={handleTodoClick} />
            <div className="btn-list">
                <button onClick={handleShowAllClick}>All</button>
                <button onClick={handleShowNewClick}>Active</button>
                <button onClick={handleShowCompletedClick}>Completed</button>
            </div>
        </div>
    );
}

export default TodoFeature;