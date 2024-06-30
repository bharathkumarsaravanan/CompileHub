import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: "BillyButcher",
    }
});

export default userSlice.reducer;