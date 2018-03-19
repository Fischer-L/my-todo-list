export default function todos (state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      if (action.content) {
        console.log("TMP> Reducer ADD_TODO", action.content);
        let todo = {
          id: `${Date.now()}`,
          isDone: false,
          content: action.content,
        };
        state.push(todo);
      }
      break;
  }
  return state;
}