import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/clientRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("nepasijungia");
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
  console.log("server running on :" + PORT);
});
