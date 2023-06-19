const express = require("express");
const router = express.Router();
const User = require("./schema");

router.post("/add", async (req, res) => {
  try {
    const newData = new User(req.body);
    await newData.save();
    res.send("user saved successfully");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});
router.get("/", async (req, res) => {
  try {
    const newData = await User.find({});
    res.send(newData);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: "User deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Error deleting user" });
    });
});

module.exports = router;
