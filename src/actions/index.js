export const addTodo = content => ({
  type: "ADD_TODO",
  content
});

export const delTodo = id => ({
  type: "DEL_TODO",
  id
});

export const doneTodo = id => ({
  type: "DONE_TODO",
  id
});

export const undoneTodo = id => ({
  type: "UNDONE_TODO",
  id
});
