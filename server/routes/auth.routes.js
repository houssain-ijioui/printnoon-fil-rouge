import express from "express";
const router = express.Router()
import authControllers from "../controllers/auth.controller.js";
import credentialsDuplicated from "../middlwares/credentials-duplicated.middlware.js";


router.post('/signup', credentialsDuplicated, authControllers.signup);
router.post('/login', authControllers.login);
router.post('/logout', authControllers.logout)


export default router;
