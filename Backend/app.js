import mongoose from "mongoose";
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./src/apiUsersRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(json());
app.use(cookieParser());

// Use API routes
app.use("/api", apiRoutes);

mongoose
  .connect("mongodb://localhost:27017/Task_management")
  .then(async () => {
    console.log("MongoDB Connected");
    const { createAdminUser } = await import("./src/server.js");
    await createAdminUser();
  })
  .catch((err) => console.error("MongoDB Connection Error:", err));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is listening to ${port}`);
});
