const express = require("express");

const { connect } = require("./config/db");

const user = require("./api/routes/user.routes");
const tag = require("./api/routes/tag.routes");
const picture = require("./api/routes/picture.routes");

connect();


const app = express();

app.set("secretKey", "nodeRestApi");

const PORT = 3000;

const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4200"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/user", user);
app.use("/tag", tag);
app.use("/picture", picture);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
