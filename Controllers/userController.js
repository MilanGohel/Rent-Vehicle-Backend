const User = require("../Models/userModal");
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email + " " + password);
  try {
    const user = await User.findOne({ email, password }).select("-password");
    console.log(user);
    if (user) {
      res.send(user);
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
exports.verifyUser = async (req, res) => {
  const { _id, aadharNumber, drivingLicense, dateOfBirth } = req.body;
 try {
  console.log(req.body);
   const user = await User.findByIdAndUpdate(_id, { aadharNumber, drivingLicense,dateOfBirth, isVerifiedUser: true }, { new: true });
   if(!user){
    return res.status(404).json({ error: "User not found" });
   }
   //const responseUser = await User.findById(_id);
   return res.status(200).json(user);
 } catch (error) {
  console.log(error);
    return res.status(400).json(error);
 }

}
exports.register = async (req, res) => {
  try {
    const newuser = new User(req.body);
    await newuser.save();
    res.send("User registered successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
};
