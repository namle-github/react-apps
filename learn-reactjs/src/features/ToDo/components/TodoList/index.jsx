import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classnames from 'classnames';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, idx) => {
        // Check null
        if (!onTodoClick) return;

        onTodoClick(todo, idx);
    }

    return (
        <ul className='todo-list'>
            {todoList.map((todo, idx) => (
                <li key={todo.id} className={classnames({
                    completed: todo.status === 'completed',
                    })}
                    onClick={() => handleTodoClick(todo, idx)}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;