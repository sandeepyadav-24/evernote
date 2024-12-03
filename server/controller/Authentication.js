const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/database");
// Function FOr HAshing Password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Function to compare passwords
const comparePassword = async (inputPassword, hashedPassword) => {
  return await bcrypt.compare(inputPassword, hashedPassword);
};

// Function to Generate Token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });
};
const Signup = async (req, res) => {
  // Getting Email and Password From Body
  const { email, password } = req.body;
  try {
    // Check if the user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User Already Exist" });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    const newUser = new User({ email: email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "USer Saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error", error: error.message });
  }
};

const Login = async (req, res) => {
  // Getting The Email and Password From The Body
  const { email, password } = req.body;

  try {
    // CHecking User Existing
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      res.status(400).json({ message: "Invalid Email " });
    }

    const isPasswordValid = await comparePassword(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      res.status(400).json({ messgae: "Invalid  Password" });
    }
    const token = generateToken(existingUser);
    res.status(201).json({ message: "Login successfully", token });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error during Login", error: error.message });
  }
};

module.exports = { Signup, Login };
