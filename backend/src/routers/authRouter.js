import express from "express";
import { SendOTP, UserRegister } from "../controllers/authControlller.js";

const router = express.Router();

console.log("Auth Router Loaded !");
router.post("/send-otp", SendOTP);
console.log("OTP Route Loaded !");
router.post("/signup", UserRegister);

export default router;
