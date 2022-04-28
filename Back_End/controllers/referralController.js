import generateSerial from "../helpers/generateSerial.js";
import User from "../models/User.js";
import ReferralLink from "../models/ReferralLink.js";

const generateLink = async (req, res) => {
  console.log("GET /api/referral/generate-link");
  //generate a new referral link
  const { email, name } = req.body;
  const userExist = await User.findOne({ email, name });

  if (userExist) {
    try {
      const referralLink = new ReferralLink({
        serial: generateSerial(),
        user: userExist._id,
      });
      const referralLinkSaved = await referralLink.save();

      return res.json(referralLinkSaved.serial);
    } catch (error) {
      console.log(error);
    }
  } else {
    const error = new Error("The user doesn't exists");
    return res.status(400).json({ msg: error.message });
  }
};

const referrerList = async (req, res) => {
  console.log("GET /api/referral/referrer-list");
  const referrerList = await User.find().where("invitations").gt(0);
  return res.json(referrerList);
};

export { generateLink, referrerList };
