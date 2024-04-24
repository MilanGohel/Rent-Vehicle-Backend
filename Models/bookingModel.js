const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    car: { type: mongoose.Schema.Types.ObjectID, ref: "cars", required: true },
    user: { type: mongoose.Schema.Types.ObjectID, ref: "users", required: true },
    bookedTimeSlots: {
      from: { type: Date, required: true },
      to: { type: Date, required: true },
    },  
    pickupPoint: { type: mongoose.Schema.Types.Mixed, required: true },
    dropPoint: { type: mongoose.Schema.Types.Mixed, required: true },
    totalMins: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    transactionId: { type: String },
    driverRequired: { type: Boolean },
    address: { type: String },
    transactionType: { type: String, required: true }
  },

  { timestamps: true }
);

const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = bookingModel;
