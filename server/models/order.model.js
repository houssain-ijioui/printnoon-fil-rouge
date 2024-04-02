import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
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
    retour: {
        type: String,
        required: true
    },
    grammage: {
        type: String,
        required: true
    },
    coins: {
        type: String,
        required: true
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