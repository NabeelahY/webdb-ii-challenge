const express = require("express");
const carRoutes = require("./cars/car-routes");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api/cars", carRoutes);

module.exports = server;
