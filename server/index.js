const express = require("express");
const cors = require("cors");

const { connect } = require("./config/db");
const { setError } = require('./api/utils/error.util')
const user = require("./api/routes/user.routes");
const tag = require("./api/routes/tag.routes");
const picture = require("./api/routes/picture.routes");

const cloudinary = require('cloudinary').v2

connect();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});


const app = express();
const PORT = process.env.PORT || 4000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4200"],
    credentials: true,
  })
);

app.use(express.json({
  limit: '3mb'
}));
app.use(express.urlencoded({ extended: true }));


app.use("/user", user);
app.use("/tag", tag);
app.use("/picture", picture);

app.use('*', (req, res, next) => {
  return next(setError(404, 'Route not found'))
})

app.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Unexpected error');
})

app.disable('x-powered-by')

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
