const {
  transcribeTranslate,
  getTranscriptions,
  deleteTranscription,
  editTranscription,
  getTranscription,
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

// DELETE, Edit & Get one
router
  .route("/:id")
  .delete(deleteTranscription)
  .patch(editTranscription)
  .get(getTranscription);

module.exports = router;
