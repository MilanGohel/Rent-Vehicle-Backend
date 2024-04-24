const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  admin: {
    type: Boolean,
    default: false,
  },
  aadharNumber: { type:String },
  drivingLicense: {type: String},
  isVerifiedUser: {type: Boolean , default: false},
  dateOfBirth: {type: Date}
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
