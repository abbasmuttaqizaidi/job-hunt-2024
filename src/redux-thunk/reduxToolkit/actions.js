import { populatePosts, setLoader } from "./slices";

export const fetchPosts = () => {
    return async (dispatch) => {
        dispatch(setLoader(true))
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = res.json();
        data.then(posts => {
            dispatch(populatePosts(posts))
        })
    }
}