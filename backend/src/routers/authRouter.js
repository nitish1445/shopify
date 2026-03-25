import express from "express";
import {
  SendLoginOTP,
  SendSignUpOTP,
  UserLogin,
  UserRegister,
} from "../controllers/authControlller.js";
import User from "../models/userModal.js";

const router = express.Router();

router.post("/signup/send-otp", SendSignUpOTP);
router.post("/signup", UserRegister);
router.post("/login/send-otp", SendLoginOTP);
router.post("/login", UserLogin);

export default router;
