// CommonJS-style export
function updateTodoLogic(todos, editId, todoSubject, todoText) {
  return todos.map(todo =>
    todo.id === editId
      ? { ...todo, editId: Date.now(), subject: todoSubject, todoText: todoText }
      : todo
  );
}

module.exports = { updateTodoLogic };