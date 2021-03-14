const express = require("express");
const router = express.Router();
const { getStreams, createStream } = require("../controllers/mainController");

router.get("/", getStreams);
router.post("/", createStream);
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

module.exports = router;
