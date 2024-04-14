import { config } from "dotenv";
config();
import Order from "../models/order.model.js";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3 from "../utils/s3.js";
import crypto from "crypto";

const bucketName = process.env.BUCKET_NAME;
const randomFileName = () => crypto.randomBytes(32).toString('hex');


const createOrder = async (req, res) => {
    const { nom, dimensions, papier, grammage, orientation } = JSON.parse(req.body.order)

    const randomName = randomFileName()
    try {
        // save file to s3
        const params = {
            Bucket: bucketName,
            Key: randomName,
            Body: req.file.buffer,
            ContentType: req.file.mimetype
        }
    
        const command = new PutObjectCommand(params);
        await s3.send(command)

        // save order to mongo db
        const order = new Order({
            nom, 
            dimensions, 
            papier, 
            grammage, 
            orientation,
            fileName: randomName
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


const orders = async (req, res) => {
    try {
        const orders = await Order.find().sort('-createdAt')
        const data = [];
        for (const order of orders) {
            const getObjetParams = {
                Bucket: bucketName,
                Key: order.fileName
            }
            const command = new GetObjectCommand(getObjetParams)
            const url = await getSignedUrl(s3, command, { expiresIn: 3600 })
            data.push({ order, fileUrl: url })
        }
        return res.status(201).json({
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "Oops something went wrong"
        })
    }
}


const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findByIdAndDelete(orderId)
        return res.status(200).json({
            message: "Order deleted"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Oops something went wrong"
        })
    }
}

export default { createOrder, orders, deleteOrder };