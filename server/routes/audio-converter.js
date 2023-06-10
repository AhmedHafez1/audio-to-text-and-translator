const { convertMp4 } = require("../controllers/audio-converter");
const router = require("express").Router();

const multer = require("multer");

// Multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/mp4", upload.single("file"), convertMp4);

module.exports = router;
