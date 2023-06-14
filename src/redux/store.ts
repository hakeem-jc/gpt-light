import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { chat } from './chatSlice';


const rootReducer = combineReducers({
    chat,
})


export const store = configureStore({reducer: rootReducer});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;