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
      const errorAux = new Error("Unexpected error from the DB");
      return res.status(500).json({ msg: errorAux.message });
    }
  } else {
    const error = new Error("The user doesn't exists");
    return res.status(400).json({ msg: error.message });
  }
};

const referrerList = async (req, res) => {
  console.log("GET /api/referral/referrer-list");

  //Brings the list of users which referrer successfully
  try {
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
  } catch (error) {
    const erros = new Error("No users found");
    return res.status(404).json({ msg: erros.message });
  }
};

export { generateLink, referrerList };
