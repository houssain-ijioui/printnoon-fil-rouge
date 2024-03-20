import { send } from "vite";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";


const signup = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({
            fullName,
            email,
            password: hashedPassword
        })

        await user.save()

        return res.status(201).send({
            message: "User Created Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Oops somehing went wrong"
        })
    }
}


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email })

        if (!user) {
            return res.status(400).send({
                message: "Email Not Found"
            })
        }

        const comparedPassword = await bcrypt.compare(password, user.password)

        if (!comparedPassword) {
            return res.status(401).send({
                message: "Incorrect Password"
            })
        }

        res.status(200).send({
            message: "Logged In"
        })
    } catch (error) {
        return res.status(500).send({
            message: "Oops something went wrong"
        })
    }
}


export default { signup, login };