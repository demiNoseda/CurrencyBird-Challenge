import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import referralRoutes from "./routes/referralRoutes.js";
import checkAuth from "./middleware/checkAuth.js";
const app = express();
app.use(express.json());

dotenv.config();
conectarDB();

//Routing
app.use("/api/users", checkAuth, userRoutes);
app.use("/api/referral", checkAuth, referralRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
