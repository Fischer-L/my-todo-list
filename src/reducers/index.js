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
const TodoType = {};
TodoType.todo = PropTypes.shape({
  id: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired
});
TodoType.todos = PropTypes.arrayOf(TodoType.todo).isRequired;
TodoType.typeDisplayed = PropTypes.string.isRequired;
export { TodoType };

export default combineReducers({
  todos,
  typeDisplayed
});
