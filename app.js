const express = require("express");
const app = express();
const port = 5000; // Choose any available port number
const cors = require("cors");
app.use(cors());

// import mongodb.........
require("./db/connection");
const User = require("./db/schema");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const router = require("./db/routes");
const bodyParser = require("body-parser");
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
