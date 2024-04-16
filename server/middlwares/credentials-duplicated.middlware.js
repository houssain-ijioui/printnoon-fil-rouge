import User from "../models/user.model.js";

const credentialsDuplicated = async (req, res, next) => {
    const { email } = req.body;

    try {
        const userExists = await User.findOne({ email: email });

        if (userExists) {
            return res.status(401).send({
                message: "Failed! Email Already in use."
            })
        }

        next()
    } catch (error) {
        return res.status(500).send({
            message: "Oops somehing went wrong"
        })
    }
}


export default credentialsDuplicated;