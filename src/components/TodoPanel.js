import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";

import "./TodoPanel.css";

class TodoPanel extends Component {

  onEnter = e => {
    console.log("TMP> TodoPanel onEnter");
    if (e.key == "Enter" && e.target.value) {
      this.props.addTodo(e.target.value);
      e.target.value = "";
    }
  }

  render() {
    return (
      <section className="todo-panel">
        <div className="todo-panel__top-panel">
          <h1 className="todo-panel__title">todos</h1>
          <input className="todo-panel__input" 
                 type="text"
                 placeholder="What do you want to do?"
                 maxLength="250"
                 onKeyDown={this.onEnter}></input>
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

export default connect(null, { addTodo })(TodoPanel);
