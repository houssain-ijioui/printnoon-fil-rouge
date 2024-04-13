import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8000/api/auth"

export const login = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
    const { email, password } = data;

    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email,
            password
        })

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const logout = createAsyncThunk("auth/logout", async (data, { rejectWithValue }) => {
    try {
        await axios.post(`${BASE_URL}/logout`)
    } catch (error) {
        return rejectWithValue("Logout Failed!")
    }
})


export const signup = createAsyncThunk("auth/signup", async (data, { rejectWithValue }) => {
    const { email, name, password } = data;
    try {
        const response = await axios.post(`${BASE_URL}/signup`, {
            name,
            email,
            password
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})