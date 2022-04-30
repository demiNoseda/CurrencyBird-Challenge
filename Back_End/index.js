import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import referralRoutes from "./routes/referralRoutes.js";
import checkAuth from "./middleware/checkAuth.js";

dotenv.config();

const app = express();
app.use(express.json());
conectarDB();

// CORS configuration
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    if (whitelist.includes(origin)) {
      //Can access the API
      callback(null, true);
    } else {
      //Cant acces the API
      callback(new Error("Cors error"));
    }
  },
};

app.use(cors(corsOptions));

//Routing
app.use("/api/users", checkAuth, userRoutes);
app.use("/api/referral", checkAuth, referralRoutes);

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

export { app, server };
