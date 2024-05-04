import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS, LOADER } from "./actions"

export const fetchPosts = () => {
    return async (dispatch) => {
        dispatch({
            type: LOADER
        });

        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = res.json();
            data.then(posts => {

                dispatch({ type: FETCH_USER_SUCCESS, payload: posts })
                console.log(posts, 'fsafdsaf');
            })
        }
        catch (err) {
            dispatch({ type: FETCH_USER_FAILURE, error: err })
        }
    }
}