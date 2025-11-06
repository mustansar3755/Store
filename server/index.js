import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./src/config/mongoDB.js";
import cloudinaryConnection from "./src/config/cloudinary.js";
import userRouter from "./src/routes/userRouter.js";

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB(); // DB Connection
cloudinaryConnection(); // Cloud Storage Connection

//Middlwares
app.use(express.json());
app.use(cors());

//Api Endpoints
app.get("/", (req, res) => {
  res.send("API WORKING");
});
app.use("/api/user", userRouter);
app.use("/api/product", userRouter);
// Api Run

app.listen(port, () => {
  console.log("Server Running on PORT NO: ", port);
});
