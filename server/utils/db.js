const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("database connected");
  } catch (error) {
    console.log(error.message);
    console.log("database failed to connect");
  }
};

module.exports = connectDb;
