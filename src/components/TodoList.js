import React, { Component } from "react";
import { connect } from "react-redux";

import "./TodoList.css";

class TodoItem extends Component {
  render() {
    let todo = this.props.todo;
    let className = "todo-list__todo-item ";
    if (todo.isDone) {
      className += "todo-done";
    }
    return (
      <li className={className}>
        <button className="todo-item__done-btn"></button>
        <p className="todo-item__content">{todo.content}</p>
        <button className="todo-item__del-btn"></button>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    console.log("TMP> TodoList render");
    let todoItems = this.props.visibleTodos
                        .map(todo => <TodoItem key={todo.id} todo={todo}/>);
    return (
      <ul className="todo-list">{todoItems}</ul>
    );
  }
}

function filterTodos(state) {
  if (state.typeDisplayed === "todo-all") {
    // Why make a copy here since all are required to display?
    // Because below return an new array so this is for consistency.
    return state.todos.slice();
  }
  return state.todos.reduce((filtereds, todo) => {
    if (state.typeDisplayed === "todo-not-done") {
      if (!todo.isDone) {
        filtereds.push(todo);
      }
    } else {
      if (todo.isDone) {
        filtereds.push(todo);
      }
    }
  }, []);
}

export default connect(state => ({
  visibleTodos: filterTodos(state)
}))(TodoList);
