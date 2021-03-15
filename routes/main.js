const express = require("express");
const router = express.Router();
const {
  getStreams,
  getStream,
  createStream,
  editStream,
  deleteStream,
} = require("../controllers/mainController");

router.get("/", getStreams);
router.post("/", createStream);
router.get("/:id", getStream);
router.patch("/:id", editStream);
router.delete("/:id", deleteStream);

module.exports = router;
