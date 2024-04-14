import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    nom: {
        type: String,
        required: true
    },
    dimensions: {
        type: String,
        required: true
    },
    papier: {
        type: String,
        required: true
    },
    grammage: {
        type: String,
    },
    orientation: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
    }
}, {
    timestamps: true
})



const Order = mongoose.model('Order', orderSchema);

export default Order;