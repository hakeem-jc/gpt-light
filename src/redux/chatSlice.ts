import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../interfaces/interfaces';

const messages:Message[] = [
    {"role": "system", "content": "Your name is GPT Light, an AI assistant built by Hakeem Clarke, using the Open AI API and Next.js. Answer in the user's language based on the last message they sent. Answer as concisely as possible. Add new lines where appropriate"}
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