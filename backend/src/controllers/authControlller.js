import User from "../models/userModal.js";

export const UserRegister = async (req, res, next) => {
  try {
    const { identifier, otp } = req.body;
    console.log(req.body);

    if (!identifier || !otp) {
      const error = new Error("Identifier and OTP are required.");
      error.statusCode = 400;
      return next(error);
    }

    if (Number(otp) !== 123456) {
      const error = new Error("Invalid OTP");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({
      $or: [{ email: identifier }, { mobileNumber: identifier }],
    });

    if (existingUser) {
      const error = new Error("User Already Registered");
      error.statusCode = 409;
      return next(error);
    }

    // save data to database
    const newUser = await User.create({
      email: identifier.includes("@") ? identifier : undefined,
      mobileNumber: identifier.includes("@") ? undefined : identifier,
    });

    console.log(newUser);

    res.status(201).json({
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

export const SendOTP = async (req, res, next) => {
  console.log("Send OTP Controller Hit !");
  try {
    const { identifier } = req.body;
    console.log(req.body);

    if (!identifier) {
      const error = new Error("Identifier is required.");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({
      $or: [{ email: identifier }, { mobileNumber: identifier }],
    });

    if (existingUser) {
      const error = new Error("User Already Registered");
      error.statusCode = 409;
      return next(error);
    }

    const otp = 123456; // Generate a random OTP here
    console.log(`Generated OTP: ${otp} for identifier: ${identifier}`);

    res.status(200).json({
      message: "OTP sent successfully",
      data: { otp },
    });
  } catch (error) {
    next(error);
  }
};
