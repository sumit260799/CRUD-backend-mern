const mongoose = require("mongoose");
const uri =
  "mongodb+srv://mail2sumitjpg:Sumit90@cluster0.ifl16b4.mongodb.net/RESTDATA";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
