import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { delTodo, doneTodo, undoneTodo, updateTodo } from "../actions";
import { TODO_TYPE, APP_CONST } from "../reducers";

import "./TodoList.css";

class TodoItem extends Component {
  onDoneBtnClick = () => {
    if (!this.props.todo.isDone) {
      this.props.doneTodo(this.props.todo.id);
    } else {
      this.props.undoneTodo(this.props.todo.id);
    }
  }

  onDelBtnClick = () => {
    this.props.delTodo(this.props.todo.id);
  }

  onEdit = e => {
    let content = e.target;
    let todoItem = content.parentNode;
    let textarea = todoItem.querySelector(".todo-item__textarea");
    todoItem.classList.add("edit-todo");
    textarea.value = content.textContent;
    textarea.focus();
  }

  onEnter = e => {
    if (e.key == "Enter" && e.target.value) {
      let todoItem = e.target.parentNode;
      todoItem.classList.remove("edit-todo");
      this.props.updateTodo(this.props.todo.id, e.target.value);
    }
  }

  onBlur = e => {
    let todoItem = e.target.parentNode;
    todoItem.classList.remove("edit-todo");
  }

  render() {
    let todo = this.props.todo;
    let className = "";
    if (todo.isDone) {
      className += "todo-done";
    }
    return (
      <li className={`todo-list__todo-item ${className}`}>
        <button className="todo-item__done-btn"
                onMouseUp={this.onDoneBtnClick}
        ></button>
        <p className="todo-item__content"
           onMouseUp={this.onEdit}
        >{todo.content}</p>
        <textarea className="todo-item__textarea"
                  maxLength={APP_CONST.maxToDoLength}
                  onBlur={this.onBlur}
                  onKeyDown={this.onEnter}
        ></textarea>
        <button className="todo-item__del-btn"
                onMouseUp={this.onDelBtnClick}
        ></button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: TODO_TYPE.todo.isRequired,
  delTodo: PropTypes.func.isRequired,
  doneTodo: PropTypes.func.isRequired,
  undoneTodo: PropTypes.func.isRequired,
};

class TodoList extends Component {
  render() {
    let todoItems = this.props.visibleTodos
                        .map(todo => <TodoItem
                                        key={todo.id} todo={todo}
                                        delTodo={this.props.delTodo}
                                        doneTodo={this.props.doneTodo}
                                        undoneTodo={this.props.undoneTodo}
                                        updateTodo={this.props.updateTodo} />);
    return (
      <ul className="todo-list">{todoItems}</ul>
    );
  }
}

TodoList.propTypes = {
  visibleTodos: PropTypes.arrayOf(TODO_TYPE.todo).isRequired,
  delTodo: PropTypes.func.isRequired,
  doneTodo: PropTypes.func.isRequired,
  undoneTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
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
  updateTodo,
})(TodoList);
