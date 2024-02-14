import TodoItem from './TodoItem';
import { useTodoContext } from '../contexts';

function TodoList() {
    const { todos } = useTodoContext();

    return (
        <div className='w-full mt-6'>
            {
                todos.length > 0 ?
                    todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
                    :
                    <p className="text-center text-[2.5rem] text-[#3e5880] font-bold mt-20">Todos Goes Here...</p>
            }
        </div>
    )
}

export default TodoList