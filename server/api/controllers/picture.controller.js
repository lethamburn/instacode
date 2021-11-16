const Picture = require("../models/picture.model");
const {setError} = require('../utils/error.util')

const getAllPictures = async (req, res, next) => {
  try {
    const pictures = await Picture.find();
    return res.json({
      status: 200,
      message: "Pictures pilladas correctamente",
      data: { pictures: pictures },
    });
  } catch (err) {
    return next(err);
  }
};

const getPictureById = async (req, res, next) => {
  try {
    const { pictureId } = req.params;
    const pictureById = await Picture.findById(pictureId);
    if(!pictureById) return next(setError(404,'Picture not found'))
    return res.json({
      status: 200,
      message: "KO get picture by id",
      data: { picture: pictureById },
    });
  } catch (err) {
    return next(err);
  }
};

const postNewPicture = async (req, res, next) => {
  try {
    let picture = req.file ? req.file.path : null;
    const newPicture = new Picture({
      description: req.body.description,
      picture: picture,
      tags: req.body.tags,
    });
    const createdPicture = await newPicture.save();
    return res.status(201).json(createdPicture);
  } catch (error) {
    next(error);
  }
};

const deletePicture = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pictureDeleted = await Picture.findByIdAndDelete(id);
    if(!pictureDeleted) return next(setError(404,'Picture not found'))
    return res.status(200).json("Picture borrada correctamente");
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  getAllPictures,
  getPictureById,
  postNewPicture,
  deletePicture,
};
