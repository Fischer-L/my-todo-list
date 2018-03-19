export default function todos (state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      if (action.content) {
        console.log("TMP> Reducer ADD_TODO", action.content);
        state = state.slice();
        state.push({
          id: `${Date.now()}`,
          isDone: false,
          content: action.content,
        });
      }
      break;

    case "DEL_TODO":
      state = state.filter(todo => todo.id !== action.id);
      break;
  }
  return state;
}