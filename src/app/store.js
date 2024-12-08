import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './../features/menuSlice'
import modalReducer from './../features/modalStatusSlice'

const store = configureStore({
    reducer:{
        menu:menuReducer,
        modal:modalReducer,
    }
})

export default store ;