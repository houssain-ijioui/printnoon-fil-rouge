import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
    const { email, password } = data;

    try {
        const response = await axios.post('http://localhost:8000/api/auth/login', {
            email,
            password
        })

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})