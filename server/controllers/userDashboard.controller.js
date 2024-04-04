import { config } from "dotenv";
config();
import Order from "../models/order.model.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
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
        console.log(error);
        return res.status(500).json({
            message: "Oops something went wrong"
        })
    }
}


export default { createOrder };