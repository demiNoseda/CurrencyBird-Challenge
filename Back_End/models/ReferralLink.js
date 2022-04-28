import mongoose from "mongoose";

const referralLinkSchema = mongoose.Schema(
  {
    serial: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const ReferralLink = mongoose.model("referralLink", referralLinkSchema);
export default ReferralLink;
