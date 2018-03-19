export default function todos(state = [], action) {
  let i = 0;
  switch (action.type) {
    case "ADD_TODO":
      if (action.content) {
        state = state.slice();
        state.push({
          id: `${Date.now()}`,
          isDone: false,
          content: action.content,
        });
      }
      break;

    case "UPDATE_TODO":
      i = state.findIndex(todo => todo.id === action.id);
      if (i >= 0 && action.content) {
        state[i].content = action.content;
        state = state.slice();
      }
      break;

    case "DEL_TODO":
      state = state.filter(todo => todo.id !== action.id);
      break;

    case "DEL_ALL_DONE":
      let dirty = false;
      let newState = state.filter(todo => {
        if (todo.isDone) {
          dirty = true;
          return false;
        }
        return true;
      });
      if (dirty) {
        state = newState;
      }
      break;

    case "DONE_TODO":
    case "UNDONE_TODO":
      i = state.findIndex(todo => todo.id === action.id);
      if (i >= 0) {
        let done = action.type === "DONE_TODO";
        if (state[i].isDone !== done) {
          state[i].isDone = !state[i].isDone;
          state = state.slice();
        }
      }
      break;
  }
  return state;
}