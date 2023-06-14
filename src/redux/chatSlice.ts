import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../interfaces/interfaces';

const messages:Message[] = [
    // {"role": "system", "content": "You're a virtual assistant. Answer the user in the language they speak in and have a conversation"},
]

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