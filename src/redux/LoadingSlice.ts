import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const setIsLoadingSlice = createSlice({
    name: 'is_loading',
    initialState: false,
    reducers: {
        setIsLoading(_state,action:PayloadAction<boolean>){
            return action.payload;
        }
    }
});

export const { setIsLoading } = setIsLoadingSlice.actions;
export const is_loading = setIsLoadingSlice.reducer;