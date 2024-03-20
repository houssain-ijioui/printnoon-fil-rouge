import User from "../models/user.model.js";


const signup = async (req, res) => {
    const user = new User({
        fullName: "houssain"
    })

    user.save()

    res.send(user)
}


export default { signup };