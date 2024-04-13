import { createSlice } from "@reduxjs/toolkit";
import { getOrders } from "./orderAction";

const initialState = {
    modal: false,
    orders: [],
    ordersPending: false
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        openModal: (state) => {
            state.modal = true
        },
        closeModal: (state) => {
            state.modal = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getOrders.pending, (state) => {
            state.ordersPending = true
        }).addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload
            state.ordersPending = false
        }).addCase(getOrders.rejected, (state, action) => {
            console.log("ERROR", action);
            state.ordersPending = false
        })
    }
})



export const { openModal, closeModal } = orderSlice.actions;

export default orderSlice.reducer;