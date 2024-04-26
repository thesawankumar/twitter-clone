import express from "express";
import dotenv from "dotenv";
import path from "path";
const app = express();
import authRoutes from "./routes/auth.js";
import connectDb from "./config/db.js";

const PORT = process.env.PORT || 5000;
dotenv.config({ path: "server/.env" });

app.get("/", (req, res) => {
  res.send("Server is ready");
});
connectDb();
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
