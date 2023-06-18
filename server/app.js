require("dotenv").config();
const express = require("express");
const transcribeTranslate = require("./routes/transcribe-translate");
const audioConvert = require("./routes/audio-converter");
const connectDB = require("./db/connect");
const handleErrors = require("./middleware/error-handler");
require("express-async-errors");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/transcribe-translate", transcribeTranslate);
app.use("/api/convert", audioConvert);

// Error Handler Middleware
app.use(handleErrors);

// Start the server
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
