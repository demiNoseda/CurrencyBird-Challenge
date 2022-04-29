import express from "express";
import {
  generateLink,
  referrerList,
} from "../controllers/referralController.js";
const router = express.Router();

//Gets a new link referral
router.post("/generate-link", generateLink); // Creates a new referral link
router.get("/referrer-list", referrerList); // Obtains the list of the referrers which has one or more invitations successfully
export default router;
