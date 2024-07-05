import mongoose from "mongoose";
import express from "express";
import { CoursesDetails } from "./models/cardSchema.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const FRONENDCONNECTION = process.env.FRONTENDPORT;
const MONGODBCONNECTION = process.env.MONGODBCONNECTION;

const app = express();
app.use(express.json());

app.use(
  cors({
    methods: ["POST", "GET", "DELETE", "PUT"],
    origin: FRONENDCONNECTION,
  })
);

mongoose.connect(MONGODBCONNECTION).then(() => {
  app.listen(PORT, () => {
    console.log("Server Running at PORT ", PORT);
  });
});

app.get("/Courses", async (req, res) => {
  try {
    let result;
    if (req.query.Category == "all") {
      result = await CoursesDetails.find({});
    } else result = await CoursesDetails.find(req.query);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});
