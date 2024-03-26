import { createSlice } from "@reduxjs/toolkit";
import { login, logout, signup } from "./authAction";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    loginLoading: false,
    loginResponseMessage: "",
    loggedIn: false,
    signUpLoading: false,
    signedUp: false,
    signedUpResponseMessage: "",
    loggedOut: false
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loginLoading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loginLoading = false
            state.loginResponseMessage = action.payload.message,
            state.userInfo = action.payload.user
            localStorage.setItem('userInfo', JSON.stringify(action.payload.user))
            state.loggedIn = true
            console.log(action.payload.user);
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loginLoading = false
            state.loginResponseMessage = action.payload.message
        })
        builder.addCase(logout.fulfilled, (state) => {
            state.userInfo = null,
            localStorage.removeItem('userInfo')
            state.loggedOut = true
            state.loginResponseMessage = "",
            state.loggedIn = false,
            state.signUpLoading = false,
            state.signedUp = false,
            state.signedUpResponseMessage = ""
        })
        builder.addCase(signup.pending, (state) => {
            state.signUpLoading = true
        })
        builder.addCase(signup.fulfilled, (state, action) => {
            state.signUpLoading = false,
            state.signedUp = true,
            state.signedUpResponseMessage = action.payload.message
        })
        builder.addCase(signup.rejected, (state, action) => {
            state.signUpLoading = true,
            state.signedUpResponseMessage = action.payload.message
        })
    }
})

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;