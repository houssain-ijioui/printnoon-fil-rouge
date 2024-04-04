import express from "express";
const router = express.Router()
import protect from "../middlwares/auth.middlware.js";
import userDashboardController from "../controllers/userDashboard.controller.js";
import upload from "../middlwares/fileUploader.js";


router.post('/create-order', upload.single('file'), userDashboardController.createOrder);
router.get('/orders', userDashboardController.orders)


export default router;
