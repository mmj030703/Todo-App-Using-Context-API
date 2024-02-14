/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { TodoContextProvider } from './contexts/index';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const updateTodo = (id, todoMessage) => {
    setTodos((prevTodos) => prevTodos.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, todo: todoMessage } : prevTodo));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map(prevTodo => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(prevTodo => prevTodo.id !== id));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("todo");
  }, [todos]);

  return (
    <TodoContextProvider value={{ todos, addTodo, deleteTodo, toggleTodo, updateTodo }}>
      <div className='min-w-full min-h-dvh bg-[#172842] flex flex-col items-center pt-24'>
        <div className="w-[600px]">
          <TodoHeader />
          <TodoList />
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;