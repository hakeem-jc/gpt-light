import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../interfaces/interfaces';

const messages:Message[] = []

const setChatSlice = createSlice({
    name: 'chat',
    initialState: messages,
    reducers: {
        setChat(state, action:PayloadAction<Message>){
            return [...state, action.payload];
        }
    }
});

export const { setChat } = setChatSlice.actions;
export const chat = setChatSlice.reducer;