import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./counterSlice";

export const ToolkitCounter = () => {
    const count = useSelector(state => state?.count);
    const dispatch = useDispatch();
    console.log(count, 'fsfsafsa');
    return <>
        {count}

        <button onClick={() => {
            dispatch(increment())
        }}>Increment</button>
        <button onClick={() => {
            dispatch(decrement())
        }}>Increment</button>

    </>
}