const { BadRequest, UnAuthorized } = require("../errors");
const User = require("../models/User");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new BadRequest("Email already exists");
  }

  // Create a new user
  const newUser = new User({ name, email, password });
  await newUser.save();

  const token = newUser.createJwt();

  res.status(201).json({
    message: "Registered successfully",
    token,
    user: { id: newUser._id },
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check if the email exists
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnAuthorized("Invalid credentials");
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new UnAuthorized("Invalid credentials");
  }

  const token = user.createJwt();

  res
    .status(200)
    .json({ message: "Login successfully", token, user: { id: user._id } });
};

module.exports = { registerUser, loginUser };
