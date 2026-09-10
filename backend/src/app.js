import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//allfile exports
import authRoutes from "./routes/authRoute.js";

dotenv.config();

const app = express();
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//wworking or not checking api
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "DevSpace API is running",
  });
});

app.use("/api/auth", authRoutes);

export default app;
