const mongoose = require("mongoose");

const mongoURI =
  "mongodb://127.0.0.1:27017/ReactDB?directConnection=true&serverSelectionTimeoutMS=10000";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
  } catch (error) {
    console.log("Error Code " + error);
  }
};

module.exports = connectToMongo;
