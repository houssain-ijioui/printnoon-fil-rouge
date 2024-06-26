import { config } from "dotenv";
config();
import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import { PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3 from "../utils/s3.js";
import crypto from "crypto";

const bucketName = process.env.BUCKET_NAME;
const bucketImages = process.env.BUCKET_IMAGES;
const randomFileName = () => crypto.randomBytes(32).toString('hex');


const createOrder = async (req, res) => {
    const { id, nom, dimensions, papier, grammage, orientation } = JSON.parse(req.body.order)

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
            creator: id,
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
    const { userId } = req.params
    try {
        const orders = await Order.find({ creator: userId }).sort('-createdAt')
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
        const params = {
            Bucket: bucketName,
            Key: order.fileName
        }
        const command = new DeleteObjectCommand(params)
        await s3.send(command)
        return res.status(200).json({
            message: "Order deleted"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Oops something went wrong"
        })
    }
}


const changeImage = async (req, res) => {
    const id = JSON.parse(req.body.id)
    const randomName = randomFileName()

    try {
        // update with new image 
        const addImageparams = {
            Bucket: bucketImages,
            Key: randomName,
            Body: req.file.buffer,
            ContentType: req.file.mimetype
        }
        const addCommand = new PutObjectCommand(addImageparams)
        await s3.send(addCommand)
        await User.findByIdAndUpdate(id, { profileImage: randomName })

        return res.status(200).json({
            message: "Image Updated"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Oops something went wrong"
        })
    }
}


const getImage = async (req, res) => {
    const { data } = req.params
    try {
        const getObjectParams = {
            Bucket: bucketImages,
            Key: data
        }
        const command = new GetObjectCommand(getObjectParams)
        const url = await getSignedUrl(s3, command, { expiresIn: 3600 })
        res.status(200).json({
            message: url
        })
    } catch (error) {
        return res.status(500).json({
            message: "Oops something went wrong"
        })
    }
}

export default { createOrder, orders, deleteOrder, changeImage, getImage };