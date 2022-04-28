import ReferralLink from "../models/ReferralLink.js";
import User from "../models/User.js";

const register = async (req, res) => {
  console.log("POST /api/users");

  //prevent duplicate records
  const { email, name, address, sex, serial } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    const error = new Error("The user already exists");
    return res.status(400).json({ msg: error.message });
  }

  //gives the Referrer user the reward
  if (serial !== "") {
    const referralLink = await ReferralLink.findOne({ serial });

    if (referralLink) {
      const referralUserExist = await User.findById(referralLink.user);
      referralUserExist.invitations += 1;
      referralUserExist.totalRewardAmount += 5000;
      await referralUserExist.save();
    } else {
      const error = new Error("Referrer could not be found");
      return res.status(400).json({ msg: error.message });
    }
  }

  try {
    const user = new User({
      email,
      name,
      address,
      sex,
      invitations: 0,
      totalRewardAmount: serial !== "" ? 5000 : 0,
    });

    await user.save();

    return res.status(200).json({ msg: "The user was registered successfully" });
  } catch (error) {
    console.log(error);
  }
};

export { register };
