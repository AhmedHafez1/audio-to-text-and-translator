const transcribeTranslate = require("../controllers/transcribe-translate");
const express = require("express");
const router = express.Router();

router.post("/", transcribeTranslate);

module.exports = router;
