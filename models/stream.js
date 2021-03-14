const mongoose = require("mongoose");

const streamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
    minLength: 1,
    maxLength: 150,
  },
  description: {
    type: String,
    required: "Description is required",
    minLength: 1,
    maxLength: 2000,
  },
  userId: { type: Number, required: true },
});

module.exports = mongoose.model("Stream", streamSchema);
