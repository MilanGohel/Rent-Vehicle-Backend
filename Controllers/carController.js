const Car = require("../Models/carModel");
exports.getAllcars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.send(cars);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.addCar = async (req, res) => {
  try {
    const newcar = new Car(req.body);
    await newcar.save();
    res.send("Car added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
};
exports.editCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.body._id, req.body, {new: true});
    // console.log(car);
    res.send("Car details updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
};
exports.deleteCar = async (req, res) => {
  try {
    const carId = req.params.carId
    const response = await Car.findByIdAndRemove({ _id: carId });

    res.send("Car deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);

  }
};
