// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
    name:'modal',
    initialState: {value:false},
    reducers: {
        toggle: (state) => {state.value = !state.value},
    }
})

export const {toggle} = modal.actions;
export default modal.reducer;