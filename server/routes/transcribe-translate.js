const transcribeTranslate = require("../controllers/transcribe-translate");
const express = require("express");
const router = express.Router();
const multer = require("multer");

// Multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("audioBuffer"), transcribeTranslate);

module.exports = router;
