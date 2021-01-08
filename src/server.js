import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./configs/db";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());


const authRoutes = require("./routes/user_route");
// connect to MongoDB database
connectDB();

// Home page
app.get("/", (req, res) => {
    res.send("Welcome To The Home Page.");
  });

app.use("/api/auths", authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});

app.use((err, req, res, next) => {
  console.log("====== consoling error js app.js");
  const errStatus = err.statusCode || 500;
  const errors  = err.message;
  const errData = err.Data;
  return res.status(errStatus).json({errors, errData});
});