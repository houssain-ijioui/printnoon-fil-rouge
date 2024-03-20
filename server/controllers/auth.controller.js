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


export default { signup };