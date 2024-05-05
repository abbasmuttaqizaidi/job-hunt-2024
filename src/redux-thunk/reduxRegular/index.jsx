import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./actionCreators";

export const ThunkIndex = () => {

    const state = useSelector(state => state?.thunkReducerRegular);
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => {
                dispatch(fetchPosts());
            }}>fetch data</button>

            {
                state?.loading ? <p>Loading...</p> :
                    state?.posts?.map(elem => { return <li>{elem?.title}</li> })
            }
        </>
    )
}

//Using traditional / regular Redux