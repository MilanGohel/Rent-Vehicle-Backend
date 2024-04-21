const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    car: { type: mongoose.Schema.Types.ObjectID, ref: "cars" },
    user: { type: mongoose.Schema.Types.ObjectID, ref: "users" },
    bookedTimeSlots: {
      
      from: { type: Date, required: true },
      to: { type: Date, required: true},
    
  },
    totalMins: { type: Number},
    totalAmount: { type: Number, required: true },
    transactionId: { type: String},
    driverRequired: { type: Boolean},
    address: { type: String , required: true},
    transactionType: { type: String, required: true}
  },
  { timestamps: true }
);

const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = bookingModel;
