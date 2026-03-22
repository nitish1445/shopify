import express from "express";
import { SendOTP, UserRegister } from "../controllers/authControlller.js";

const router = express.Router();

router.post("/send-otp", SendOTP);
router.post("/signup", UserRegister);

export default router;
