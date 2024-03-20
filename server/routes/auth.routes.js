import express from "express";
const router = express.Router()
import authControllers from "../controllers/auth.controller.js";


router.get('/signup', authControllers.signup);


export default router;
