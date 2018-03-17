import React, { Component } from "react";

import TodoPanel from "./TodoPanel";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoPanel />
      </div>
    );
  }
}

export default App;
