const { Animal } = require("../models");

class animalController {
  static getAnimals(_, res) {
    Animal.findAll().then((results) => {
      results = results.map((result) => result.dataValues);
      res.status(200).json(results);
    });
  }
}

module.exports = animalController;
