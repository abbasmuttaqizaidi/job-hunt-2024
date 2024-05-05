import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./actions";

const initialState = {
    user: [],
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}