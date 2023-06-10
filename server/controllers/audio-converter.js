const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require("path");

// Set FFmpeg path
const ffmpegPath = path.join("C:", "ffmpeg", "ffmpeg.exe"); // Replace with the actual path to FFmpeg
ffmpeg.setFfmpegPath(ffmpegPath);

const convertMp4 = (req, res) => {
  const inputFile = req.file.path;
  const outputFile = `${inputFile}.wav`;

  ffmpeg(inputFile)
    .output(outputFile)
    .on("end", () => {
      res.download(outputFile, "converted.wav", () => {
        // Clean up files after download
        fs.unlinkSync(inputFile);
        fs.unlinkSync(outputFile);
      });
    })
    .on("error", (err) => {
      console.error("Conversion error:", err);
      res.status(500).json({ error: "Audio conversion failed." });
    })
    .run();
};

module.exports = { convertMp4 };
