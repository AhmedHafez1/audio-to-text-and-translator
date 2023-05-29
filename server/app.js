require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const transcribeTranslateRouter = require("./routes/transcribe-translate");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

// Routes
app.use("/api/transcribe-translate", transcribeTranslateRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
