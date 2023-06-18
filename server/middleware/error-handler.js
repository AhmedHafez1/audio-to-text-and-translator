const { StatusCodes } = require("http-status-codes");

const handleErrors = (err, req, res, next) => {
  console.error(err);
  if (err.statusCode)
    return res.status(err.statusCode).json({ err: err.message });
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ error: "Internal server error" });
};

module.exports = handleErrors;
