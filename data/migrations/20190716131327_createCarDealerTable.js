exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments();
    table
      .string("vin")
      .notNullable()
      .unique();
    table.text("make").notNullable();
    table.text("model").notNullable();
    table
      .integer("number")
      .notNullable()
      .unique();
    table.text("car_status");
    table.text("transmission_type");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
