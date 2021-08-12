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
routers.post("/favorites/:animalId", favoriteController.addFavorites);
routers.get("/favorites", authorization, favoriteController.getFavorites);
routers.delete("/favorites/:id", authorization, favoriteController.deleteFavorites);

module.exports = routers;
