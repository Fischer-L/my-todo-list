import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addTodo, filterTodo, delAllDone } from "../actions";
import { TodoType } from "../reducers";

import "./TodoPanel.css";

class TodoPanel extends Component {

  onEnter = e => {
    if (e.key == "Enter" && e.target.value) {
      this.props.addTodo(e.target.value);
      e.target.value = "";
    }
  }

  onFilterTodo = e => {
    switch (e.target.id) {
      case "todo-panel-display-all-btn":
        this.props.filterTodo("todo-all");
        break;

      case "todo-panel-display-not-dones-btn":
        this.props.filterTodo("todo-not-done");
        break;

      case "todo-panel-display-dones-btn":
        this.props.filterTodo("todo-done");
        break;
    }
  }

  onDelAllDone = () => {
    this.props.delAllDone();
  }

  render() {
    let allActive = "";
    if (this.props.typeDisplayed === "todo-all") {
      allActive = "todo-panel__btn--active";
    }
    let notDonesActive = "";
    if (this.props.typeDisplayed === "todo-not-done") {
      notDonesActive = "todo-panel__btn--active";
    }
    let donesActive = "";
    if (this.props.typeDisplayed === "todo-done") {
      donesActive = "todo-panel__btn--active";
    }

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
          <button id="todo-panel-display-all-btn"
                  className={`todo-panel__btn ${allActive}`}
                  onMouseUp={this.onFilterTodo}
          >All</button>
          <button id="todo-panel-display-not-dones-btn"
                  className={`todo-panel__btn ${notDonesActive}`}
                  onMouseUp={this.onFilterTodo}
          >Todos</button>
          <button id="todo-panel-display-dones-btn"
                  className={`todo-panel__btn ${donesActive}`}
                  onMouseUp={this.onFilterTodo}
          >Dones</button>
          <button id="todo-panel-add-btn" className="todo-panel__btn">Add</button>
          <button className="todo-panel__btn"
                  onMouseUp={this.onDelAllDone}
          >Clear dones</button>
        </nav>
      </section>
    );
  }
}

TodoPanel.propTypes = {
  typeDisplayed: TodoType.typeDisplayed,
  addTodo: PropTypes.func.isRequired,
  filterTodo: PropTypes.func.isRequired,
  delAllDone: PropTypes.func.isRequired,
};

export default connect(state => ({
  typeDisplayed: state.typeDisplayed
}), { 
  addTodo, filterTodo, delAllDone
})(TodoPanel);
