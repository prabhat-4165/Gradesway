const User = require("../Models/User");
const mongoose = require("mongoose");
require("dotenv").config();
const Connection = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database", error);
  }
};

module.exports = Connection;
