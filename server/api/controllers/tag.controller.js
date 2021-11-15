const Tag = require("../models/tag.model");

const getAllTags = async (req, res, next) => {
    try {

        const tags = await Tag.find();
        return res.json({
            status: 200,
            message: 'Todo chachi',
            data: { tags: tags },
        });

    } catch (err) {
        return next(err);
    }
};

module.exports = { getAllTags }