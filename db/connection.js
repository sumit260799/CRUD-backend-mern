const mongoose = require("mongoose");

const userName = process.env.USER_NAME;
const password = process.env.PASSWORD;
const uri = `mongodb+srv://${userName}:${password}@cluster0.ifl16b4.mongodb.net/RESTDATA`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
