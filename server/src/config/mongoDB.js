import mongoose from "mongoose";

// Function for DB connection
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database Connected");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/store`);
  } catch (error) {
    console.log("Connection Error", error);
  }
};

export default connectDB;
