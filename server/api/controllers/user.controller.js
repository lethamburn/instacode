const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { setError } = require('../utils/error.util')

const getAllUsers = async (req, res, next) => {
    try {

        const users = await User.find();
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
        /* const newUser = new User();
        newUser.name = req.body.name;
        newUser.emoji = req.body.emoji;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.description = req.body.description; */
        
        const newUser = new User(req.body)
        newUser.pictures = [];
        newUser.followUsers = [];

        //Pnt. mejora: comprobar si el user existe antes de guardar COMPLETADO
        const userExist = await User.findOne({ email: newUser.email })
        if (userExist) return next(setError(400, 'This user already exists'))
        const userDb = await newUser.save();

        //Pnt. mejora: autenticar directamente al usuario COMPLETADO
        if (userDb) {
            userDb.password = null
            //console.log(req.body)
            //console.log(jwt);
            const token = jwt.sign(
                {
                    id: userDb._id,
                    name: userDb.name
                },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );
            return res.json({
                status: 201,
                message: 'Todo Chachi',
                data: { user: userInfo, token: token }
            });
        }

    } catch (err) {
        return next(err);
    }
}

const authenticate = async (req, res, next) => {
    try {
        const userInfo = await User.findOne({ email: req.body.email })
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            userInfo.password = null
            //console.log(req.body)
            //console.log(jwt);
            const token = jwt.sign(
                {
                    id: userInfo._id,
                    name: userInfo.name
                },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );
            return res.json({
                status: 200,
                message: 'Todo chachi',
                data: { user: userInfo, token: token },
            });
        } else {
            const error = setError(400, 'Algo ha ido mal')
            return res.json({ status: error.code, message: error.message, data: null });
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
            data: {
                user: {},
                token: ''
            }
        });
    } catch (err) {
        return next(err)
    }
}

module.exports = { getAllUsers, createUser, authenticate, logout }