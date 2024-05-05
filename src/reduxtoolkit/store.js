import { configureStore } from "@reduxjs/toolkit";
import toolkitCounterReducer from './counterSlice';

export const toolkitStore = configureStore({
    reducer: toolkitCounterReducer
})