import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./configs/db";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

// connect to MongoDB database
connectDB();

// Home page
app.get("/", (req, res) => {
    res.send("Welcome To The Home Page.");
  });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});
