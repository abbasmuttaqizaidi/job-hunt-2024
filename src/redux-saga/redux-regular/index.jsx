import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "./actions";

export const SagaRegularReduxIndex = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state);
 
    return <>
        <button onClick={() => {
            dispatch(fetchUser())
        }}>F E T C H</button>
    </>
}