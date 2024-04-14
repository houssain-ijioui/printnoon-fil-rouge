import { createSlice } from "@reduxjs/toolkit";
import { getOrders, deleteOrder } from "./orderAction";

const initialState = {
    modal: false,
    orders: [],
    ordersPending: false,
    deleted: false,
    deletedMessage: ""
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
        },
        setDeleted: (state) => {
            state.deleted = true
        },
        unSetDeleted: (state) => {
            state.deleted = false
        },
        clearDeletedMessage: (state) => {
            state.deletedMessage = ""
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
        }).addCase(deleteOrder.fulfilled, (state, action) => {
            state.deletedMessage = action.payload
        } )
    }
})



export const { openModal, closeModal, setDeleted, unSetDeleted, clearDeletedMessage } = orderSlice.actions;

export default orderSlice.reducer;