const Cars = require("../cars/carsDb");

module.exports = {
  validateId
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