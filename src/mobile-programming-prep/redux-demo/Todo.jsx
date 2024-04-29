import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./reduxTradiotional/actions";

const TodoApp = () => {

    const [localTodos, setLocalTodos] = useState('');
    const todos = useSelector(state => state?.todoReducers?.todos);
    const dispatch = useDispatch();

    const addTodoToLocal = () => {
        const tempTodos = {
            name: localTodos,
            id: 5
        }
        dispatch(addTodo(tempTodos, ...todos))
    }

    console.log(todos,'dsafafdsffsad');

    return <>
        <input value={localTodos} onChange={(e) => { setLocalTodos(e.target.value) }} />
        <button onClick={() => {
            addTodoToLocal()
        }}>add Todo {todos?.length} </button>
        {
            todos?.length > 1 &&
            todos?.map(elem => <li>{elem?.name}</li>)
        }
    </>
}

export default TodoApp