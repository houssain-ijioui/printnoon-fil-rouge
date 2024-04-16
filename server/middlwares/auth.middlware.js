import jwt from "jsonwebtoken";
import User from "../models/user.model.js"


const protect = async (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select('-password')

            next()
        } catch (error) {
            return res.status(401).json({
                message: "Not Authorized, Invalid Token"
            })
        } 
    } else {
        return res.status(401).json({
            message: "Not Authorized, No Token"
        })
    }
}

export default protect;