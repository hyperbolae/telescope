import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messages: [
        {
            id: 1,
            body: "This is an example",
            username: "Tiny Horse",
            position: [0, 0],
            parent: null
        },
        {
            id: 2,
            body: "This is another example",
            username: "Large Squirrel",
            position: [-1, 0],
            parent: 1
        }
    ]
};

export const slice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
    },
});

export const selectMessages = state => state.chat.messages;
export default slice.reducer;
