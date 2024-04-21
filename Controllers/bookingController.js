const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51Oo1mESANYloZJkUTor26BoRjQ77inVbSmbA4OfbwY37MIL3k2CR8kqAeinQiQMsYJLeunlIZ6bt1jT2LHF1GkmK0095zyoCAz"
);
const Booking = require("../Models/bookingModel");
const Car = require("../Models/carModel");
exports.bookCar = async (req, res) => {
  const { token } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    console.log(customer);

    const payment = await stripe.charges.create(
      {
        amount: req.body.totalAmount * 100,
        currency: "pkr",
        customer: customer.id,
        receipt_email: token.email,
        description: "Software development services",
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      // req.body.transactionId = payment.source.id;
      res.send("Your booking is successfull");
      const newbooking = new Booking(req.body);
      await newbooking.save();
      const car = await Car.findOne({ _id: req.body.car });

      const booking = {bookingId: newbooking._id.toString(),...req.body.bookedTimeSlots}
      // console.log(car  + "car")
      car.bookedTimeSlots.push(booking);
      car.isBooked = true;
      // console.log(req.body.car);

      await car.save();
      res.send("Booking success")
    } else {

        return res.status(400).json(error);
      }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
exports.bookCarUsingCash = async (req, res) => {

  try {
    
      // req.body.transactionId = payment.source.id;
      // res.send("Your booking is successfull");
      const newbooking = new Booking(req.body);
      await newbooking.save();
      const car = await Car.findOne({ _id: req.body.car });
      console.log(car);
      const booking = {bookingId: newbooking._id.toString(),...req.body.bookedTimeSlots}
      // console.log(car  + "car")
      car.bookedTimeSlots.push(booking);
      car.isBooked = true;
      // console.log(req.body.car);

      await car.save();
      res.send("Booking success")
    
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("car").populate("user");
    res.send(bookings);
  } catch (error) {
    return res.status(400).json(error);
  }
};
