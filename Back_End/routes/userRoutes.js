import express from "express";
const router = express.Router();
import { register } from "../controllers/userController.js";

//Registration of a user
router.post("/", register); // Creates a new user

export default router;
