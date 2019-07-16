exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "1W43RE",
          make: "Toyota",
          model: "Corolla",
          number: 123456,
          car_status: "Clean",
          transmission_type: "Automatic"
        },
        {
          vin: "90YU34",
          make: "Lexus",
          model: "ES",
          number: 573829
        },
        {
          vin: "9UD42W",
          make: "Honda",
          model: "Accord",
          number: 450176,
          car_status: "Clean",
          transmission_type: "Manual"
        }
      ]);
    });
};
