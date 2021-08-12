const { Favorite } = require("../models");

class favoriteController {
  static addFavorites(req, res) {
    let { animalId } = req.params;
    Favorite.create(
      {
        userId: +req.userId,
        animalId: +animalId,
      },
      { returning: true }
    )
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static getFavorites(req, res) {
    let favorites = req.authorizedFavorites;
    res.status(200).json({ favorites: favorites });
  }
  static deleteFavorites(req, res) {
    let favorites = req.authorizedFavorites;
    let { id } = req.params;
    favorites = favorites.map((favorite) => {
      return favorite.dataValues;
    });
    favorites = favorites.filter((favorite) => favorite.id === +id);
    if (favorites) {
      Favorite.destroy({
        where: {
          id: +id,
        },
      })
        .then(() => {
          res
            .status(200)
            .json({ message: "Successfully delete favorite animal" });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Favorite tidak terautorisasi");
    }
  }
}

module.exports = favoriteController;
