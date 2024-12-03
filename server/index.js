const express = require("express");
const cors = require("cors");
const connectionDb = require("./config/db");
const { Signup, Login } = require("./controller/Authentication");

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

// PORT Listening
app.listen(PORT, () => {
  console.log("Listening at port: " + PORT);
});
