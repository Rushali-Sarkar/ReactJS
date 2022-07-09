import React from 'react';
import TodoListItem from './TodoListItem.js';
import './TodoList.css';
import NewTodoForm from './NewTodoForm.js';
import { connect } from 'react-redux';
import { removeTodo } from '../action.js';

const TodoList = ({ todos=[{text: 'hello'}] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
})

export default connect (mapStateToProps, mapDispatchToProps)(TodoList);