const CustomError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends CustomError {
  constructor(message) {
    super(StatusCodes.UNAUTHORIZED, message);
  }
}

module.exports = BadRequest;
