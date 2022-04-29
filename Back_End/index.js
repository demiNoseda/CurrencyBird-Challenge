import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import referralRoutes from "./routes/referralRoutes.js";
import checkAuth from "./middleware/checkAuth.js";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());

dotenv.config();
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

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
