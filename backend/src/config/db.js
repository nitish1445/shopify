import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected at : ${conn.connection.host}`);
    console.log(`🌐 Database Name : ${conn.connection.name}`);
  } catch (error) {
    console.log("Error while connecting to DB : ", error);
    process.exit(1);
  }
};

export default connectDB;
