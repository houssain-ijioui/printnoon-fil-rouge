import express from "express";
const router = express.Router()
import protect from "../middlwares/auth.middlware.js";
import userDashboardController from "../controllers/userDashboard.controller.js";


router.post('/create-order', userDashboardController.createOrder);


export default router;
