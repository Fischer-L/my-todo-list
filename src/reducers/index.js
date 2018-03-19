import { combineReducers } from "redux";
import PropTypes from "prop-types";

import todos from "./todos";
import typeDisplayed from "./typeDisplayed";

// The state's data format as below:
// {
//   // The type of todos to display
//   typeDisplayed: "todo-not-done" | "todo-done" | "todo-all"
//
//   // The array of todo items
//   todos: [],
// }
//
// The Todo item's data format as below:
// {
//   // The todo id
//   id: "12345678",
//
//   // The flag marking done or not
//   isDone: true | false,
//
//   // The content
//   content: "What to do",
// }
//
// Probably we could use immutable.js and flow.js in the future.
// But let's not worry about that first since the app is simple now.
// Let's get the app completed first.
const TODO_TYPE = {};
TODO_TYPE.todo = PropTypes.shape({
  id: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired
});
TODO_TYPE.todos = PropTypes.arrayOf(TODO_TYPE.todo).isRequired;
TODO_TYPE.typeDisplayed = PropTypes.string.isRequired;

const APP_CONST = {
  maxToDoLength: 250
};

export { TODO_TYPE, APP_CONST };

export default combineReducers({
  todos,
  typeDisplayed
});
