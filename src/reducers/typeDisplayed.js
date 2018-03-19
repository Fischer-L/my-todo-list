const VALID_TYPE_DISPLAYED = ["todo-all", "todo-done", "todo-not-done"];
export default function todos (state = "todo-all", action) {
  switch (action.type) {
    case "FILTER_TODO":
      if (VALID_TYPE_DISPLAYED.includes(action.typeDisplayed)) {
        state = action.typeDisplayed;
      }
      break;
  }
  return state;
}