const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Define the fields and their types
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
