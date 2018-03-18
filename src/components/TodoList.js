import React, { Component } from "react";

import "./TodoList.css";

class TodoItem extends Component {
  render() {
    let className = "todo-list__todo-item ";
    if (this.props.isDone) {
      className += "todo-done";
    }
    return (
      <li className={className}>
        <button className="todo-item__done-btn"></button>
        <p className="todo-item__content">The box blur outputs the average of the pixel values inside the convolution matrix. The way to do that is to create a convolution matrix of size NxN where each of the weights is 1 / (NxN). The box blur outputs the average of the pixel values inside the convolution matrix. The way to do that is to create a convolution matrix of size NxN where each of the weights is 1 / (NxN).
        </p>
        <button className="todo-item__del-btn"></button>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        <TodoItem />
        <TodoItem isDone="true" />
        <TodoItem />
      </ul>
    );
  }
}

export default TodoList;
