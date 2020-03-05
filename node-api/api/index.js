const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const User = require("../models/user");

exports.start = async ({ mongoURL }) => {
  await mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const app = express();

  app.use(bodyParser.json());

  app.get("/users", async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.sendStatus(500);
    }
  });

  app.post("/users", async (req, res) => {
    try {
      const user = new User({
        name: req.body.name
      });
      await user.save();
      res.json(user);
    } catch (err) {
      res.sendStatus(500);
    }
  });

  return app;
};
