import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { delTodo, doneTodo, undoneTodo } from "../actions";
import { TodoType } from "../reducers";

import "./TodoList.css";

class TodoItem extends Component {
  onDoneBtnClick = () => {
    console.log("TMP> onDoneBtnClick", this.props.todo.isDone);
    if (!this.props.todo.isDone) {
      this.props.doneTodo(this.props.todo.id);
    } else {
      this.props.undoneTodo(this.props.todo.id);
    }
  }

  onDelBtnClick = () => {
    this.props.delTodo(this.props.todo.id);
  }

  render() {
    let todo = this.props.todo;
    let className = "todo-list__todo-item ";
    if (todo.isDone) {
      className += "todo-done";
    }
    return (
      <li className={className}>
        <button className="todo-item__done-btn"
                onMouseUp={this.onDoneBtnClick}
        ></button>
        <p className="todo-item__content">{todo.content}</p>
        <button className="todo-item__del-btn"
                onMouseUp={this.onDelBtnClick}
        ></button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: TodoType.todo.isRequired,
  delTodo: PropTypes.func.isRequired,
  doneTodo: PropTypes.func.isRequired,
  undoneTodo: PropTypes.func.isRequired,
};

class TodoList extends Component {
  render() {
    console.log("TMP> TodoList render");
    let todoItems = this.props.visibleTodos
                        .map(todo => <TodoItem
                                        key={todo.id} todo={todo}
                                        delTodo={this.props.delTodo}
                                        doneTodo={this.props.doneTodo}
                                        undoneTodo={this.props.undoneTodo} />);
    return (
      <ul className="todo-list">{todoItems}</ul>
    );
  }
}

TodoList.propTypes = {
  visibleTodos: PropTypes.arrayOf(TodoType.todo).isRequired,
  delTodo: PropTypes.func.isRequired,
  doneTodo: PropTypes.func.isRequired,
  undoneTodo: PropTypes.func.isRequired,
};

function filterTodos(state) {
  if (state.typeDisplayed === "todo-all") {
    // Why make a copy here since all are required to display?
    // Because below return an new array so this is for consistency.
    return state.todos.slice();
  }
  let done = state.typeDisplayed === "todo-done";
  return state.todos.filter(todo => todo.isDone === done);
}

export default connect(state => ({
  visibleTodos: filterTodos(state)
}), {
  delTodo,
  doneTodo,
  undoneTodo,
})(TodoList);
