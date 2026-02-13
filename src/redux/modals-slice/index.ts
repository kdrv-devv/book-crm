
import { createSlice } from '@reduxjs/toolkit'

interface ModalsInitialStateType{

}

const initialState:ModalsInitialStateType = {

}

export const modalsSlice = createSlice({
        name:"Modals",
        initialState,
        reducers:{
                
        }
})

export const {} = modalsSlice.actions
export default modalsSlice.reducer