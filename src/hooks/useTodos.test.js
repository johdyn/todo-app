/* eslint-env jest */
const { updateTodoLogic } = require('./updateTodoLogic');

describe('updateTodoLogic', () => {
  it('updates the correct todo', () => {
    const todos = [
      { id: 1, subject: 'Old', todoText: 'Old text', completed: false },
      { id: 2, subject: 'Another', todoText: 'Another text', completed: false },
    ];
    const editId = 1;
    const todoSubject = 'New subject';
    const todoText = 'New text';

    const updatedTodos = updateTodoLogic(todos, editId, todoSubject, todoText);

    expect(updatedTodos.find(t => t.id === 1).subject).toBe('New subject');
    expect(updatedTodos.find(t => t.id === 1).todoText).toBe('New text');
    expect(updatedTodos.find(t => t.id === 2).subject).toBe('Another'); // ikke ændret
  });
});