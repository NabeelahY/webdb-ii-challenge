const Cars = require("../cars/carsDb");

module.exports = {
  validateId,
  validateBody
};

async function validateId(req, res, next) {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res
        .status(400)
        .json({ message: "IDs should be a numerical value" });
    }

    const car = await Cars.getById(id);
    if (!Object.keys(car).length) {
      return res.status(404).json({ message: "Car ID does not exist" });
    } else {
      req.car = car;
      next();
    }
  } catch (error) {
    return res.status(400).json({ message: "Sever error" });
  }
}

async function validateBody(req, res, next) {
  const { vin, make, model, number } = req.body;

  if (!Object.keys(req.body).length) {
    return res.status(400).json({ message: "Missing car data" });
  }

  if (!vin || !make || !model || !number) {
    return res
      .status(400)
      .json({ message: "VIN, make, model and number are required" });
  }
  next();
}
