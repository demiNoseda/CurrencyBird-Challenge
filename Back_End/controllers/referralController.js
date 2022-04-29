import generateSerial from "../helpers/generateSerial.js";
import User from "../models/User.js";
import ReferralLink from "../models/ReferralLink.js";
import sortListByTotalRewardAmount from "../helpers/sortListByTotalRewardAmount.js";

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
  let id = 1;
  const result = referrerList.map(
    ({ name, invitations, totalRewardAmount }) => ({
      name,
      invitations,
      totalRewardAmount,
      id: id++,
    })
  );
  return res.json(result.sort(sortListByTotalRewardAmount)); //
};

export { generateLink, referrerList };
