import { useState, useEffect } from 'react';

export default function useTodos() {

    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });

    const [todoText, setTodoText] = useState("");
    const [todoSubject, setTodoSubject] = useState("");
    const [editInProgress, setEditInProgress] = useState(false);
    const [editId, setEditId] = useState();


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);


    function handleDelete(id) {
        const updated = todos.filter(todo => todo.id !== id);
        setTodos(updated);
    }

    function handleEdit(id) {

        const todoEdit = todos?.find(todo => todo.id === id);
        setTodoSubject(todoEdit.subject);
        setTodoText(todoEdit.todoText);
        setEditInProgress(true);
        setEditId(id);
    }

    function handleCompleted(id) {
        const updated = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updated);
    }

    const addTodo = (e) => {
        e.preventDefault();

            const todoObject = {
                "id": Date.now(),
                "subject": todoSubject,
                "todoText": todoText,
                "completed": false,
            }

            setTodos([...todos, todoObject]);
            setTodoText("");
            setTodoSubject("");
    }

    const updateTodo = (e) => {
        e.preventDefault();

            const updated = todos.map(todo =>
                todo.id === editId ? {
                    "id": todo.id,
                    "editId": Date.now(),
                    "subject": todoSubject,
                    "todoText": todoText,
                    "completed": todo.completed,
                } : todo
            );
            setTodos(updated);
            setTodoText("");
            setTodoSubject("");
            setEditInProgress(false);
        }

    function handleSubmit(e) {

        editInProgress ? updateTodo(e) : addTodo(e);
        
    }


    return { todos, todoText, todoSubject, setTodoText, setTodoSubject, editInProgress, handleCompleted, handleSubmit, handleDelete, handleEdit }
}