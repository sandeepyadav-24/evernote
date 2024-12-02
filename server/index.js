const express = require("express");
const PORT = 3000;
const app = express();
const cors = require("cors");
const connectionDb = require("./config/db");
const User = require("./model/database");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
connectionDb();

app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.json({ msg: "USer Saved successfully" });
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error" });
  }
});

app.listen(PORT, () => {
  console.log("Listening at port: " + PORT);
});
