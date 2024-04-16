import jwt from "jsonwebtoken";

const generateToken = (res, user) => {
    const token = jwt.sign({ 
        id: user._id,
        email: user.email,
        name: user.name,
        profileImage: user.profileImage
    }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
    })

    return token;
}

export default generateToken;