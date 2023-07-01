const {
  transcribeTranslate,
  getTranscriptions,
  deleteTranscription,
} = require("../controllers/transcription");
const express = require("express");
const router = express.Router();
const multer = require("multer");

// GET
router.get("/", getTranscriptions);

// Multer
const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post("/", upload.single("audioBuffer"), transcribeTranslate);

// DELETE
router.delete("/:id", deleteTranscription);

module.exports = router;
