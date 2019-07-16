const db = require("../data/dbConfig");

module.exports = {
  get,
  getById,
  createCar
};

function get() {
  return db("cars");
}

function getById(id) {
  return db("cars").where({ id });
}

function createCar({
  vin,
  make,
  model,
  number,
  car_status,
  transmission_type
}) {
  return db("cars").insert({
    vin,
    make,
    model,
    number,
    car_status,
    transmission_type
  });
}
