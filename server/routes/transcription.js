const {
  transcribeTranslate,
  getTranscriptions,
  deleteTranscription,
  editTranscription,
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

// DELETE & Edit
router.route("/:id").delete(deleteTranscription).patch(editTranscription);

module.exports = router;
