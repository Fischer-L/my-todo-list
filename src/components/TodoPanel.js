import React, { Component } from "react";

import "./TodoPanel.css";

class TodoPanel extends Component {
  render() {
    return (
      <section className="todo-panel">
        <div className="todo-panel__top-panel">
          <h1 className="todo-panel__title">todos</h1>
          <input className="todo-panel__input" type="text" placeholder="What do you want to do?"></input>
        </div>
        <nav className="todo-panel__button-bar">
        </nav>
      </section>
    );
  }
}

export default TodoPanel;
