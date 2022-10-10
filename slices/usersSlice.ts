import { createSlice } from '@reduxjs/toolkit'


export interface UsersState {
    users: [],
    userPosts: [],

}


const initialState: UsersState = {
    users: [],
    userPosts: [],


}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getAllUsers: (state, action) => {
            state.users = action.payload
        },
        getUserPosts: (state, action) => {
            state.userPosts = action.payload
        },

    },
})


export const { getAllUsers, getUserPosts } = usersSlice.actions

export default usersSlice.reducer