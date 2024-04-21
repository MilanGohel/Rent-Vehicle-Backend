const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    modelName: { type: String, required: true},
    image: { type: String, required: true },
    purchaseDate: {type: Date, required: true},
    capacity: { type: Number, required: true },
    fuelType: { type: String, required: true },
    bookedTimeSlots: [
      {
        from: { type: Date, required: true },
        to: { type: Date, required: true },
        bookingId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'bookings'}
      },
    ],
    isBooked: {type: Boolean, default: false},
    rentPerHour: { type: Number, required: true },
  },
  { timestamps: true }
);
const carModel = mongoose.model("cars", carSchema);
module.exports = carModel;
