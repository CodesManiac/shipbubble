import { createSlice } from '@reduxjs/toolkit'


export interface UsersState {
    users: [],
    userPosts: [],
    searchInput: string,

}


const initialState: UsersState = {
    users: [],
    userPosts: [],
    searchInput: '',


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
        setSearchInput: (state, action) => {
            state.searchInput = action.payload
        },

    },
})


export const { getAllUsers, getUserPosts, setSearchInput } = usersSlice.actions

export default usersSlice.reducer