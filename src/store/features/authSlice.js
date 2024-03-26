import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authAction";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    loginLoading: false,
    loginResponseMessage: ""
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.userInfo = null,
            localStorage.removeItem('userInfo')
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loginLoading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loginLoading = false
            state.loginResponseMessage = action.payload.message,
            state.userInfo = action.payload.user
            localStorage.setItem('userInfo', JSON.stringify(action.payload.user))
            console.log(action.payload.user);
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loginLoading = false
            state.loginResponseMessage = action.payload.message
        })
    }
})

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;