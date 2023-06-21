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
router.get("/api/get", (req, res) => {
  const searchTerm = req.query.searchTerm;

  // Use Mongoose to perform the search

  User.find({ fname: { $regex: searchTerm, $options: "i" } })
    .then((results) => res.json(results))
    .catch((error) =>
      res.status(500).json({ error: "An error occurred while searching" })
    );
});
// findOne...........
// router.get("/get/:id", async (req, res) => {
//   try {
//     // Find the item with the specified id
//     const user = await User.find({ _id: request.params.id });
//     response.status(200).json(user);
//   } catch (error) {
//     res.status(500).send("Server error");
//   }
// });

router.get("/get/:id", (req, res) => {
  const id = req.params.id; // Get the id parameter from the URL
  // Use findById method in the model
  User.findById(id)
    .then((doc) => {
      if (!doc) {
        // Handle the case when the document is not found
        console.log("Document not found");
        return;
      }

      // Document found, do something with it
      res.send(doc);
    })
    .catch((err) => {
      // Handle the error
      console.error(err);
    });
});
//update method
// router.patch("/:id", async (req, res) => {
//   const id = req.params.id;
//   // const user = req.body;
//   // const editUser = new User(user)
//   const newData = new User(req.body);
//   try {
//     // await newData.save();
//     await User.updateOne({ id }, newData);
//     res.status(201).json(newData);
//   } catch (error) {
//     console.error(error);
//     res.status(400).send(error);
//   }
// });

router.patch("/:id", async (req, res) => {
  let user = req.body;

  const editUser = new User(user);
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.status(201).json(editUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});
//
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
