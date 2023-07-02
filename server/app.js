require("dotenv").config();
require("express-async-errors");
const express = require("express");
const transcribeTranslateRouter = require("./routes/transcription");
const textToSpeechRouter = require("./routes/text-to-speech");
const authUser = require("./routes/auth");
const connectDB = require("./db/connect");
const handleErrors = require("./middleware/error-handler");
const routeNotExist = require("./middleware/route-not-existing");
const auth = require("./middleware/auth");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/transcribe-translate", auth, transcribeTranslateRouter);
app.use("/synthesize", auth, textToSpeechRouter);
app.use("/api/user", authUser);

app.use(routeNotExist);
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
