import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'
import usersReducer from './slices/usersSlice'
export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch