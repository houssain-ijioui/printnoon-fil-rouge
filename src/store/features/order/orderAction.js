import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URL = "http://localhost:8000/user/dashboard";


export const getOrders = createAsyncThunk("order/getOrders", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${BASE_URL}/orders`)
        return response.data.data
    } catch (error) {
        rejectWithValue(error.response.data.message)
    }
})
