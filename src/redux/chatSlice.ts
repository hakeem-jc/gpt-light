import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../interfaces/interfaces';

const messages:Message[] = [
    {"role": "system", "content": "You are ChatGPT, a large language model trained by OpenAI. Answer in the user's language based on the last message they sent. Answer as concisely as possible."}
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