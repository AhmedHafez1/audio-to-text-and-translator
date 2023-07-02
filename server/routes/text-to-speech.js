const express = require("express");
const router = express.Router();
const { textToSpeech } = require("../controllers/text-to-speech");

router.post("/", textToSpeech);

module.exports = router;
