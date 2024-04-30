import { connect, useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions";

export const Counter = (props) => {

    const count = useSelector(state => state?.counter?.count);
    const dispatch = useDispatch();

    return (
        <>
            {count}
            <button onClick={() => {
                dispatch(increment())
            }}>increment</button>
            <button onClick={() => {
                dispatch(decrement())

            }}>decrement</button>
        </>
    )
}

export default Counter;

// const mapStateToProps = (state) => ({
//     count: state?.counter?.count
// })
// const mapToProps = {
//     increment, decrement
// }

// export default connect(mapStateToProps, mapToProps)(Counter);