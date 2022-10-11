import { createSlice } from '@reduxjs/toolkit'


export interface PostsState {
    visibility: boolean,
    posts: [],
    comments: []
}
const initialState: PostsState = {
    visibility: false,
    posts: [],
    comments: [],


}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setVisibility: (state) => {
            state.visibility = !state.visibility
        },
        getAllPosts: (state, action) => {

            state.posts = action.payload
        },
        getPostComments: (state, action) => {
            state.comments = action.payload
        },

    },
})

export const { setVisibility, getAllPosts, getPostComments } = postsSlice.actions

export default postsSlice.reducer