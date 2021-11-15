const multer = require("multer");
const path = require("path");

const fs = require("fs");
const cloudinary = require("cloudinary").v2;

require("dotenv").config();

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
});

const VALID_FILE_TYPES = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "application/pdf",
];

const fileFilter = (req, file, cb) => {
  if (!VALID_FILE_TYPES.includes(file.mimetype)) {
    cb(new Error("Invalid file type"));
  } else {
    cb(null, true);
  }
};

const uploadToCloudinary = async (req, res, next) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
  });

  if (req.file) {
    try {
      const filePath = req.file.path;
      const image = await cloudinary.uploader.upload(filePath);
      await fs.unlinkSync(filePath);
      req.file.url = image.secure_url;
      console.log(req.file);
      return next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = {
  upload: upload,
  uploadToCloudinary,
};
