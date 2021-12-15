const express = require("express");

const UserController = require("../../Application/Controller/UserController");

const routes = express.Router();

const userController = new UserController();
routes
    .post("/register", userController.handle)
    .post("/auth", userController.auth);

module.exports = routes;
