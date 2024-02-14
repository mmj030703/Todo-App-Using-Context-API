import { useState } from "react";
import { useTodoContext } from "../contexts";

const TodoHeader = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputErrorMessage, setInputErrorMessage] = useState("");

    const { addTodo } = useTodoContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === "") {
            setInputErrorMessage("Todo Message is Empty!");
            return;
        }

        addTodo({ id: Date.now(), todo: inputValue, completed: false });

        setInputValue("");
        setInputErrorMessage("");
    };

    return (
        <header>
            <h1 className="text-white font-bold text-center text-[1.8rem]">Manage Your Todos</h1>
            <form onSubmit={handleSubmit} className="mt-8 flex">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value)
                        setInputErrorMessage("");
                    }}
                    onFocus={() => setInputErrorMessage("")}
                    placeholder="Write Todo..."
                    className={`w-full py-2 ps-2 bg-white/20 rounded-s-lg outline-none + ${inputErrorMessage === "" ? 'text-white border-none' : 'text-red-300 border-red-400 border-2'}`}
                />
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-e-lg outline-none">Add</button>
            </form>
            {inputErrorMessage !== "" ? <p className="text-red-300 mt-2">{inputErrorMessage}</p> : null}
        </header>
    );
};

export default TodoHeader;