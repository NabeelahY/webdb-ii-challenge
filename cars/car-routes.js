const express = require("express");
const Cars = require("./carsDb");
const { validateId, validateBody } = require("../middleware");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await Cars.get();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving the cars"
    });
  }
});

router.get("/:id", validateId, async (req, res) => {
  try {
    const car = await Cars.getById(req.params.id);
    res.json(car[0]);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving the car"
    });
  }
});

router.post("/", validateBody, async (req, res) => {
  try {
    const newCarId = await Cars.createCar(req.body);
    const newCar = await Cars.getById(newCarId[0]);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({
      message: error.toString()
    });
  }
});

module.exports = router;
