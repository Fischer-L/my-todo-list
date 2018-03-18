import React, { Component } from "react";

import "./TodoList.css";

class TodoItem extends Component {
  render() {
    return (
      <li className="todo-list__item">
        
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        <TodoItem />
      </ul>
    );
  }
}

export default TodoList;
