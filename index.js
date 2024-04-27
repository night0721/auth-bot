require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const app = express();
const port = process.env.PORT || 3001;
const http = require("http").Server(app);
const passport = require("passport");
const db = require("./models/user");
require("./bot");
require("./auth/discord");
require("dotenv").config();
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB!"))
  .catch(e => console.log(e));
app.use(
  session({
    name: "Auth",
    secret: "XYZ-V",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO,
    }),
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", require("./api/auth/discord"));

app.get("/", async (req, res) => {
  if (req.user) {
    if (req.headers["x-forwarded-for"])
      db.findOneAndUpdate(
        { id: req.user.id },
        {
          ip: req.headers["x-forwarded-for"],
        }
      );
    res.send(
      `<h1>Hello ${req.user.username}.\nYou are authorized, you can now close this page.</h1>`
    );
  } else {
    res.redirect("/api/auth/discord");
  }
});

http.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
