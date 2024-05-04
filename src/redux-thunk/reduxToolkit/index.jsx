import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./actions";

export const ThunkWithToolkitIndex = () => {

    const data = useSelector(state => state);
    const dispatch = useDispatch();

    console.log(data, 'fdsafsafs');

    return (
        <>
            <button onClick={() => {
                dispatch(fetchPosts())
            }}>Fetch</button>

            {
                data?.loading ? <p>Loading...</p> :
                    data?.posts?.map(e => <li>{e?.title}</li>)
            }
        </>
    )
}