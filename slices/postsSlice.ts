import { createSlice } from '@reduxjs/toolkit'


export interface PostsState {
    posts: [],
    comments: []
}
const initialState: PostsState = {
    posts: [],
    comments: [],


}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getAllPosts: (state, action) => {

            state.posts = action.payload
        },
        getPostComments: (state, action) => {
            state.comments = action.payload
        },

    },
})

export const { getAllPosts, getPostComments } = postsSlice.actions

export default postsSlice.reducer