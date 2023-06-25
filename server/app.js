require("dotenv").config();
require("express-async-errors");
const express = require("express");
const transcribeTranslate = require("./routes/transcribe-translate");
const authUser = require("./routes/auth");
const audioConvert = require("./routes/audio-converter");
const connectDB = require("./db/connect");
const handleErrors = require("./middleware/error-handler");
const routeNotExist = require("./middleware/route-not-existing");
const auth = require("./middleware/auth");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/transcribe-translate", auth, transcribeTranslate);
app.use("/api/convert", audioConvert);
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
