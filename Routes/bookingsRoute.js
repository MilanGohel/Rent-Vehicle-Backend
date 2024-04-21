const express = require("express");
const router = express.Router();
const bookingController = require("../Controllers/bookingController");
router.post("/bookcar", bookingController.bookCar);
router.post("/bookcarusingcash", bookingController.bookCarUsingCash);
router.get("/getallbookings", bookingController.getAllBookings);
module.exports = router;
