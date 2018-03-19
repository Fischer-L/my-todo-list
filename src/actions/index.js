export const addTodo = content => ({
  type: "ADD_TODO",
  content
});

export const delTodo = id => ({
  type: "DEL_TODO",
  id
});
