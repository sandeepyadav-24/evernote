const jwt = require("jsonwebtoken");
const Secret = "MY_GF_NAME_IS";
const authenticateJwt = (req, res, next) => {
  const token = req.headers.authentication?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }
  jwt.verify(token, Secret, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  });
};
module.exports = authenticateJwt;
