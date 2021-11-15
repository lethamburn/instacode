const User = require("../models/user.model");

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

module.exports = { getAllUsers }