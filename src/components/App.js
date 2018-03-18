import React, { Component } from "react";

import TodoList from "./TodoList";
import TodoPanel from "./TodoPanel";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoPanel />
        <TodoList />
      </div>
    );
  }
}

export default App;
