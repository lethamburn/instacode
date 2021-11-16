const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jasonwebtoken = require("jsonwebtoken");

const getAllUsers = async (req, res, next) => {
    try {

        const users = await User.find().populate("pictures");
        return res.json({
            status: 200,
            message: 'Todo chachi',
            data: { users: users },
        });

    } catch (err) {
        return next(err);
    }
};

const createUser = async (req, res, next) => {
    try {
        const newUser = new User();
        newUser.name = req.body.name;
        newUser.emoji = req.body.emoji;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.description = req.body.description;
        newUser.pictures = [];
        newUser.followUsers = [];

        //Pnt. mejora: comprobar si el user existe antes de guardar

        const userDb = await newUser.save();

        //Pnt. mejora: autenticar directamente al usuario

        return res.json({
            status: 201,
            message: 'Todo Chachi',
            data: null
        });
    } catch (err) {
        return next(err);
    }
}

const authenticate = async (req, res, next) => {
    try {
        const userInfo = await User.findOne({ email: req.body.email })
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            userInfo.password = null
            console.log(req.body)
            console.log(jasonwebtoken);
            const token = jasonwebtoken.sign(
                {
                    id: userInfo._id,
                    name: userInfo.name
                },
                req.app.get("secretKey"),
                { expiresIn: "1h" }
            );
            return res.json({
                status: 200,
                message: 'Todo chachi',
                data: { user: userInfo, token: token },
            });
        } else {
            return res.json({ status: 400, message: '400 meehhhh', data: null });
        }
    } catch (err) {
        return next(err);
    }
}

const logout = (req, res, next) => {
    try {
        return res.json({
            status: 200,
            message: 'Todo chachi',
            token: null
        });
    } catch (err) {
        return next(err)
    }
}

module.exports = { getAllUsers, createUser, authenticate, logout }