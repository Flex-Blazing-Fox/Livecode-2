const routers = require("express").Router();
const userController = require("../controllers/userController");
const animalController = require("../controllers/animalController");
const favoriteController = require("../controllers/favoriteController");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

routers.post("/register", userController.register);
routers.post("/login", userController.login);
routers.use(authentication);
routers.get("/animals", animalController.getAnimals);
routers.get("/favorites", animalController.getFavorites);
routers.post("/favorites/:animalId", animalController.addFavorites);
routers.delete("/favorites/:animalId", authorization, animalController.deleteFavorites);

module.exports = routers;
