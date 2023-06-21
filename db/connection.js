const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ifl16b4.mongodb.net/RESTDATA`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
