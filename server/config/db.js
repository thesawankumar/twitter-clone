import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "server/.env" });

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.log("DB CONNECTION FAILED");
    console.error(error);
    process.exit(1);
  }
};

export default connectDb;
