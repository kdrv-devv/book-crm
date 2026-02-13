import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'

export const store = configureStore({
    reducer:{
        auth:authReducer
    }
})

export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;


