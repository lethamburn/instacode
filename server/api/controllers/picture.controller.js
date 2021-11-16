const Picture = require("../models/picture.model");

const fs = require("fs");

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
    let picture = req.file ? req.file.url : null;

    const newPicture = new Picture({
      description: req.body.description,
      picture: picture,
      tags: req.body.tags,
      /* createdBy: req.user._id, */
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
    await Picture.findByIdAndDelete(id);
    return res.staus(200).json("Picture borrada correctamente");
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
