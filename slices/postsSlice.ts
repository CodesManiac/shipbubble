import { createSlice } from '@reduxjs/toolkit'


export interface PostsState {
    visibility: boolean,
    posts: [],
    comments: [],
    removedPost: number
}
const initialState: PostsState = {
    visibility: false,
    posts: [],
    comments: [],
    removedPost: 0


}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        showVisibility: (state) => {
            state.visibility = true
        },
        hideVisibility: (state) => {
            state.visibility = false
        },
        getAllPosts: (state, action) => {

            state.posts = action.payload
        },
        getPostComments: (state, action) => {
            state.comments = action.payload
        },
        setRemovedPost: (state, action) => {
            state.removedPost = action.payload
        },

    },
})

export const { showVisibility, hideVisibility, getAllPosts, getPostComments, setRemovedPost } = postsSlice.actions

export default postsSlice.reducer