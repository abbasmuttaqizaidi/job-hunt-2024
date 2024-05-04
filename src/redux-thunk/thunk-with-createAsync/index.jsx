import { useDispatch, useSelector } from "react-redux"
import { fetchuser } from "./slice";

export const ThunkWithCreateAsyncIndex = () => {

    const data = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => {
                dispatch(fetchuser())
            }}>F e t c h</button>

            {
                data?.loading ? <p>Loading...</p> :
                    data?.posts?.map(e => <li>{e?.title}</li>)
            }
        </>
    )
}