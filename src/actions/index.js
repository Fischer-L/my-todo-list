export const addTodo = content => ({
  type: "ADD_TODO",
  content
});

export const delTodo = id => ({
  type: "DEL_TODO",
  id
});

export const delAllDone = () => ({
  type: "DEL_ALL_DONE",
});

export const doneTodo = id => ({
  type: "DONE_TODO",
  id
});

export const undoneTodo = id => ({
  type: "UNDONE_TODO",
  id
});

export const filterTodo = typeDisplayed => ({
  type: "FILTER_TODO",
  typeDisplayed
});

export const updateTodo = (id, content) => ({
  type: "UPDATE_TODO",
  id,
  content
});
