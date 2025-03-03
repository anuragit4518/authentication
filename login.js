const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const formatedEmail = email.toLowerCase();
        const findedUser = await User.findOne({ email: formatedEmail });

        if (!findedUser) {
            const error = new Error("No user found");
            error.statusCode = 400;
            throw error;
        }

        const isPassMatch = await bcrypt.compare(password, findedUser.password);
        if (!isPassMatch) {
            const error = new Error("Incorrect password");
            error.statusCode = 400;
            throw error;
        }

        // Generate the JWT access token
        const accessToken = jwt.sign(
            { email: formatedEmail, userId: findedUser._id },
            process.env.ACCESS_TOKEN_KEY, // You should replace this with an actual secret key, possibly from env variables.
            { expiresIn: "7d" } // Set the expiration time as per your requirement.
        );

        // Send the token to the client
        res.status(200).json({ message:'login successfully',status:true,token:accessToken });

    } catch (error) {
        next(error);
    }
};
module.exports = login;
