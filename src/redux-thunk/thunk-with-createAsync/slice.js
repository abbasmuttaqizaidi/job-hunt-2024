import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchuser = createAsyncThunk('user/fetchuser', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
})

export const userSlice = createSlice({
    name: 'user',
    initialState: { posts: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchuser.pending, (state) => {
            state.loading = true;
            state.error = null
        }).addCase(fetchuser.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload
        }).addCase(fetchuser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer;