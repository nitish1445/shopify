import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/authRouter.js";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// redirect to routes
app.use("/auth", AuthRouter);

// runs only when the routes is being hit
app.get("/", (req, res) => {
  console.log("Route hit !");
  res.send("Server is working");
});

//global error handler
app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const StatusCode = err.statusCode || 500;
  console.log("Error found : ", { ErrorMessage, StatusCode });
  res.status(StatusCode).json({ message: ErrorMessage });
});

const port = process.env.PORT || 5000;
app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`🚀 Server is running on port ${port}`);
  } catch (error) {
    console.error("😬 Error starting server:", error);
  }
});
