import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";


const signup = async (req, res) => {
    const { name, email, password } = req.body;
    console.log("triggered");
    try {

        const user = new User({
            name,
            email,
            password
        })

        await user.save()

        return res.status(201).json({
            message: "User Created Successfully",
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Oops somehing went wrong"
        })
    }
}


const login = async (req, res) => {
    const { email, password } = req.body;


    try {
        const user = await User.findOne({ email: email })

        if (!user) {
            return res.status(401).json({
                message: "Email Or Password is not Valid"
            })
        }

        const comparedPassword = await bcrypt.compare(password, user.password)

        if (!comparedPassword) {
            return res.status(401).json({
                message: "Email Or Password is not Valid"
            })
        }

        generateToken(res, user._id)

        res.status(200).json({
            message: "Logged In",
            user
        })
    } catch (error) {
        return res.status(500).json({
            message: "Oops something went wrong"
        })
    }
}


const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {
            httpOnly: true,
            expires: new Date(0)
        })
        res.status(200).json({ message: "Logged Out" })
    } catch (error) {
        return res.status(500).json({
            message: "Oops something went wrong"
        })
    }
}


const profile = async (req, res) => {
    try {
        console.log(req.user);
        res.status(200).json({
            message: "Profile"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Oops something went wrong"
        })
    }
}

export default { signup, login, logout, profile };