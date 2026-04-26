import { useState, useMemo } from 'react';
import useTodos from './hooks/useTodos.js'
import './index.css'
import TodoCard from './components/TodoCard.jsx'
import TodoForm from './components/TodoForm.jsx'
import FilterSection from './components/FilterSection.jsx';

function App() {

  const [showOnlyCompleted, setShowOnlyCompleted] = useState(false);
  const { todos, handleCompleted, handleSubmit, handleEdit, handleDelete, todoText, todoSubject, setTodoText, setTodoSubject, editInProgress } = useTodos();
  const [showOnlyUncompleted, setShowOnlyUncompleted] = useState(false);
  const [fromDate, setFromDate] = useState();
  const [untilDate, setUntilDate] = useState();
  const [searchText, setSearchText] = useState("");


  function handleShowCompleted(e) {
    setShowOnlyCompleted(e.target.checked)
  }

  function handleShowUncompleted(e) {
    setShowOnlyUncompleted(e.target.checked)
  }

  function handleFilterReset() {
    setShowOnlyCompleted(false);
    setShowOnlyUncompleted(false);
    setFromDate("");
    setUntilDate("");
    setSearchText("");
  }

  const visibleTodos = useMemo(() => {
    const search = searchText.toLowerCase();

    return todos.filter(t => {
      const todoDate = new Date(t.editId || t.id);
      const todoDay = todoDate.toISOString().slice(0, 10);
      const matchesFrom = fromDate ? todoDate >= new Date(fromDate) : true;
      const matchesUntil = untilDate ? todoDay <= untilDate : true;
      const matchesCompleted = showOnlyCompleted ? t.completed : true;
      const matchesUncompleted = showOnlyUncompleted ? !t.completed : true;
      const matchesSearch = searchText
        ? (t.todoSubject?.toLowerCase().includes(search) ||
           t.todoText?.toLowerCase().includes(search))
        : true;

      return matchesFrom && matchesUntil && matchesCompleted && matchesUncompleted && matchesSearch;
    });
  }, [todos, showOnlyCompleted, showOnlyUncompleted, fromDate, untilDate, searchText]);

  return (
    <>
      <div className="p-8 flex flex-col bg-slate-50 h-screen">
        <div className="flex justify-center w-full">
          <header className="mb-4">
            <h1 className="text-xl font-bold">Todo app
            </h1>
          </header>
        </div>
        <div className="flex w-full justify-center">
          <TodoForm editInProgress={editInProgress} handleSubmit={handleSubmit} todoText={todoText} todoSubject={todoSubject} setTodoText={setTodoText} setTodoSubject={setTodoSubject} />
        </div>
        <div className="flex gap-8">
          <FilterSection showOnlyCompleted={showOnlyCompleted} handleShowCompleted={handleShowCompleted} showOnlyUncompleted={showOnlyUncompleted} handleShowUncompleted={handleShowUncompleted} fromDate={fromDate} setFromDate={setFromDate} untilDate={untilDate} setUntilDate={setUntilDate} searchText={searchText} setSearchText={setSearchText} handleFilterReset={handleFilterReset} />
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {
                visibleTodos.length === 0 ? <p className="text-gray-500">No todos yet!</p> :
                  visibleTodos.map((todo, index) => (
                    <TodoCard key={todo.id} todo={todo} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />
                  ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
