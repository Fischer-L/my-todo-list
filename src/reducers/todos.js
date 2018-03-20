import localStore from "./localStore";

export default function todos(state = localStore.get("todos", []), action) {
  let i = 0;
  let dirty = false;
  let newState = null;

  switch (action.type) {
    case "ADD_TODO":
      if (action.content) {
        newState = state.slice();
        newState.push({
          id: `${Date.now()}`,
          isDone: false,
          content: action.content,
        });
        dirty = true;
      }
      break;

    case "UPDATE_TODO":
      i = state.findIndex(todo => todo.id === action.id);
      if (i >= 0 && action.content) {
        newState = state.slice();
        newState[i].content = action.content;
        dirty = true;
      }
      break;

    case "DEL_TODO":
      newState = state.filter(todo => todo.id !== action.id);
      dirty = true;
      break;

    case "DEL_ALL_DONE":
      newState = state.filter(todo => {
        if (todo.isDone) {
          dirty = true;
          return false;
        }
        return true;
      });
      break;

    case "DONE_TODO":
    case "UNDONE_TODO":
      i = state.findIndex(todo => todo.id === action.id);
      if (i >= 0) {
        let done = action.type === "DONE_TODO";
        if (state[i].isDone !== done) {
          newState = state.slice();
          newState[i].isDone = !state[i].isDone;
          dirty = true;
        }
      }
      break;
  }

  if (dirty) {
    localStore.set("todos", newState);
    return newState;
  }
  return state;
}