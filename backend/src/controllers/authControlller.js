import User from "../models/userModal.js";
import OTP from "../models/otpModal.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { genEmailOTP } from "../utils/emailService.js";

export const UserRegister = async (req, res, next) => {
  try {
    const { identifier, otp } = req.body;

    if (!identifier || !otp) {
      const error = new Error("Identifier and OTP are required.");
      error.statusCode = 400;
      return next(error);
    }

    const existingOTP = await OTP.findOne({
      $or: [{ email: identifier }, { mobileNumber: identifier }],
    });

    if (!existingOTP) {
      const error = new Error("Invalid OTP, try again!!");
      error.statusCode = 401;
      return next(error);
    }

    const verifiedOTP = await bcrypt.compare(otp, existingOTP.otp);
    if (!verifiedOTP) {
      const error = new Error("Invalid OTP, try again!!");
      error.statusCode = 401;
      return next(error);
    }

    await existingOTP.deleteOne();

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

    res.status(201).json({
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

export const SendSignUpOTP = async (req, res, next) => {
  console.log("Send OTP Controller Hit !");
  try {
    const { identifier } = req.body;
    console.log(req.body);

    if (!identifier) {
      const error = new Error("Email or Mobile number is required.");
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

    // Generate a random OTP using crypto for security and cant be predicted
    const otp = crypto.randomInt(100000, 1000000);
    console.log("OTP ", otp);

    //hashing otp wrt random salt before saving to db
    const hashOTP = await bcrypt.hash(otp.toString(), 10);

    await OTP.deleteMany({
      $or: [{ email: identifier }, { mobileNumber: identifier }],
    });

    await OTP.create({
      email: identifier.includes("@") ? identifier : undefined,
      mobileNumber: identifier.includes("@") ? undefined : identifier,
      otp: hashOTP,
    });

    genEmailOTP({
      email: identifier.includes("@") ? identifier : undefined,
      otp,
    });

    res.status(200).json({
      message: "OTP sent successfully",
      data: { otp },
    });
  } catch (error) {
    next(error);
  }
};

export const SendLoginOTP = async (req, res, next) => {
  try {
    const { identifier } = req.body;

    if (!identifier) {
      const error = new Error("Email or Mobile number is required.");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({
      $or: [{ email: identifier }, { mobileNumber: identifier }],
    });

    if (!existingUser) {
      const error = new Error("User not found. Register to login.");
      error.statusCode = 401;
      return next(error);
    }

    const otp = crypto.randomInt(100000, 1000000);
    console.log("OTP", otp);

    //hash otp before saving to db
    const hashedOTP = await bcrypt.hash(otp.toString(), 10);

    await OTP.deleteMany({
      $or: [{ email: identifier }, { mobileNumber: identifier }],
    });

    await OTP.create({
      email: identifier.includes("@") ? identifier : undefined,
      mobileNumber: identifier.includes("@") ? undefined : identifier,
      otp: hashedOTP,
    });

    genEmailOTP({
      email: identifier.includes("@") ? identifier : undefined,
      otp,
    });

    return res.status(200).json({
      message: "OTP sent successfully",
      data: { otp },
    });
  } catch (error) {
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { identifier, otp } = req.body;

    if (!identifier || !otp) {
      const error = new Error("Identifier and OTP are required.");
      error.statusCode = 400;
      return next(error);
    }

    const existingOTP = await OTP.findOne({
      $or: [{ email: identifier }, { mobileNumber: identifier }],
    });

    if (!existingOTP) {
      const error = new Error("Invalid OTP, try again !!");
      error.statusCode = 401;
      return next(error);
    }

    const verifiedOTP = await bcrypt.compare(otp, existingOTP.otp);
    if (!verifiedOTP) {
      const error = new Error("Invalid OTP, try again !!");
      error.statusCode = 401;
      next(error);
    }

    await existingOTP.deleteOne(); // delete after verification

    const existingUser = await User.findOne({
      $or: [{ email: identifier }, { mobileNumber: identifier }],
    });

    if (!existingUser) {
      const error = new Error("Login error, try again");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      message: "Login successful",
      data: existingUser,
    });
  } catch (error) {
    next(error);
  }
};
