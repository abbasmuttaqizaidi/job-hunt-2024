import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        posts: [],
        loading: false,
        error: null
    },
    reducers: {
        setLoader(state) {
            state.loading = true;
        },
        populatePosts(state, action) {
            state.posts = action.payload
            state.loading = false;
        },
    }
});

export const { setLoader, populatePosts } = userSlice.actions;
export default userSlice.reducer;