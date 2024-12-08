// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name:'menu',
    initialState: {value:[], total:0},
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
            state.total += 1
        },
        remove:(state, action) => {
            const index_menu = state.value.findIndex(item=>item.name === action.payload)
            state.total -= state.value[index_menu].qty
            state.value.splice(index_menu, 1)} ,
        increment:(state, action) => {
            // รับค่า index แล้วเพิ่ม-ลบ qty
            const index_menu = state.value.findIndex(item=>item.name === action.payload)
            state.value[index_menu].qty += 1
            state.total += 1
            // state.value[action.payload].qty += 1
        } ,
        decrement:(state, action) => {
            // รับค่า index แล้วเพิ่ม-ลบ qty
            const index_menu = state.value.findIndex(item=>item.name === action.payload)
            state.value[index_menu].qty -= 1
            state.total -= 1
        } ,
        newOrder:(state) => {
            state.value = [];
            state.total = 0
        }
    }
})

export const {add, remove, increment, decrement, newOrder} = menuSlice.actions;
export default menuSlice.reducer;