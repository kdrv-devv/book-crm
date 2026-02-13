import { createSlice } from "@reduxjs/toolkit";


interface AuthSliceType {

}

const initialState: AuthSliceType = {

}

export const authSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        logOut: () => {
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
        }
    }
})

export const { logOut } = authSlice.actions
export default authSlice.reducer