import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { chat } from './chatSlice';
import { is_loading } from './LoadingSlice';


const rootReducer = combineReducers({
    chat,
    is_loading
})


export const store = configureStore({reducer: rootReducer});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;