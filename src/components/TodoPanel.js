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
          <button className="todo-panel__btn">Todo</button>
          <button className="todo-panel__btn">Finished</button>
          <button id="todo-panel-add-btn" className="todo-panel__btn">Add</button>
          <button className="todo-panel__btn">Delete All</button>
        </nav>
      </section>
    );
  }
}

export default TodoPanel;
