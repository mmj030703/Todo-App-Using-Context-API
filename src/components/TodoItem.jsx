/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useTodoContext } from '../contexts';
import { useState } from 'react';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMessage, setTodoMessage] = useState(todo.todo);
    const { updateTodo, toggleTodo, deleteTodo } = useTodoContext();

    const toggleTodoHandler = () => {
        toggleTodo(todo.id);
    };

    const editTodo = () => {
        setIsTodoEditable(!isTodoEditable);
    };

    const saveTodo = () => {
        setTodoMessage(todoMessage);
        setIsTodoEditable(!isTodoEditable);
        updateTodo(todo.id, todoMessage);
    };

    return (
        <div className={`flex items-center gap-x-4 w-full mb-[11px] p-2 rounded-lg ${todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'}`} >
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={toggleTodoHandler}
            />
            <input type="text" value={todoMessage} onChange={(e) => setTodoMessage(e.target.value)} className={`w-full bg-transparent outline-0 ${todo.completed ? 'line-through' : ''} ${isTodoEditable ? 'border border-black px-1' : 'border-0'}`} readOnly={!isTodoEditable} />
            <div className="flex gap-x-4">
                {
                    isTodoEditable === false ?
                        <FontAwesomeIcon onClick={editTodo} title='Edit Todo' className={`text-green-800 cursor-pointer ${todo.completed ? 'pointer-events-none opacity-50' : ''}`} icon={faPenToSquare} />
                        :
                        <FontAwesomeIcon onClick={saveTodo} title='Save Todo' className='text-green-800 cursor-pointer' icon={faSave} />
                }
                <FontAwesomeIcon className='text-red-600 cursor-pointer' icon={faTrash} onClick={() => deleteTodo(todo.id)} />
            </div>
        </div>
    )
}

export default TodoItem;