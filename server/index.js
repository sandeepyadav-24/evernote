const express = require("express");
const cors = require("cors");
const connectionDb = require("./config/db");
const { Signup, Login } = require("./controller/Authentication");
const authenticateJwt = require("./middleware/authenticateJwt");
const Notes = require("./model/database");

const PORT = 3000;
const app = express();

// MiddleWares
app.use(express.json());
app.use(cors());

// DataBase Connection Function
connectionDb();

// ROutes
app.post("/api/signup", Signup);
app.post("/api/login", Login);
app.post("/api/notes", authenticateJwt, async (req, res) => {
  //console.log(req.user + "User ");
  //console.log(req.body + "Body");
  try {
    const note = new Notes({
      userId: req.user.id,
      title: req.body.title,
      content: req.body.value,
    });
    const result = await note.save();
    if (!result) {
      return res.status(401).json({ message: "Problem on saving notes" });
    }
    res.status(201).json({
      result: result,
    });
  } catch (error) {
    console.error("error: " + error);
  }
});

// PORT Listening
app.listen(PORT, () => {
  console.log("Listening at port: " + PORT);
});
