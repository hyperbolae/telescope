import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messages: ["This is a message", "This is another message"],
};

export const slice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
    },
});

export const selectMessages = state => state.chat.messages;
export default slice.reducer;
