const Picture = require("../models/picture.model");

const getAllPictures = async (req, res, next) => {
    try {

        const pictures = await Picture.find();
        return res.json({
            status: 200,
            message: 'Todo chachi',
            data: { pictures: pictures },
        });

    } catch (err) {
        return next(err);
    }
};

module.exports = { getAllPictures }