const mongoose = require("mongoose");
const connectionDb = async () => {
  const url =
    "mongodb+srv://sandeepyadav004343:ZI0S8eWoviq2vWW5@cluster0.5njff.mongodb.net/evernote";

  try {
    await mongoose.connect(url);
    console.log("Connected To DB");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectionDb;
