import React from "react";
import "./app.css";
import { hot } from "react-hot-loader";
import TodoList from './todos/TodoList';

const App = () => (
    <div className="app">
        <TodoList />
    </div>
);

export default hot(module)(App);