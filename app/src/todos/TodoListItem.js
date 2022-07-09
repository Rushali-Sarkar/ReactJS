import React from 'react';
import { Button } from 'react-bootstrap';
import './TodoListItem.css';

const TodoListItem = ({ todo }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div>
            <Button className="completed-button">Mark as completed</Button>
            <Button className="remove-button">Remove</Button>
        </div>
    </div>
);

export default TodoListItem;