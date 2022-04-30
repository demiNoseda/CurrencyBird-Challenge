import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const { MONGO_URI, NODE_ENV, MONGO_URI_TEST } = process.env;

const connectionString = NODE_ENV === "test" ? MONGO_URI_TEST : MONGO_URI;

const conectarDB = async () => {
  try {
    const connection = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const url = `${connection.connection.host}:${connection.connection.port}`;
  } catch (error) {
    console.error(`error: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;
