import Order from "../models/order.model.js";

const createOrder = async (req, res) => {
    const { nom, dimensions, papier, retour, grammage, coins, orientation } = req.body;
    try {
        const order = new Order({
            nom, dimensions, retour, papier, grammage, coins, orientation
        })
        await order.save();
        return res.status(201).json({
            message: "Order Created"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Oops something went wrong"
        })
    }
}


export default { createOrder };