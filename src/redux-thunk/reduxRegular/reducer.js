import { FETCH_USER_SUCCESS, LOADER } from "./actions";

const initialState = {
    posts: [],
    error: null,
    loading: false
}

export const thunkReducerRegular = (state = initialState, action) => {
    switch (action.type) {
        case LOADER:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            console.log(state, action,'fsafsafsf');
            return {
                ...state,
                posts: action.payload, loading: false
            }

        default:
            return state
    }

}