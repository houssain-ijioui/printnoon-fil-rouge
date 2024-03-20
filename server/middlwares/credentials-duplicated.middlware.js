import User from "../models/user.model.js";

const credentialsDuplicated = async (req, res, next) => {
    const { email } = req.body;

    try {
        const checkEmail = await User.findOne({ email: email });

        if (checkEmail) {
            return res.status(400).send({
                message: "Failed! Email Already in use."
            })
        }

        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Oops somehing went wrong"
        })
    }
}


export default credentialsDuplicated;