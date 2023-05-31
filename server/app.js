require("dotenv").config();
const express = require("express");
const transcribeTranslate = require("./routes/transcribe-translate");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/transcribe-translate", transcribeTranslate);

app.post("/api/transcribe-translate/test", (req, res) => {
  res.send({ transcription: "12345", translation: "678910" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
