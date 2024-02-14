/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

export const TodoContext = React.createContext({
    todos: [],
    addTodo: (id, todo) => { },
    updateTodo: (id, todoMessage) => { },
    toggleTodo: (id) => { },
    deleteTodo: (id) => { }
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => {
    return useContext(TodoContext);
};