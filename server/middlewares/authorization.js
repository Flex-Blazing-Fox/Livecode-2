const { Favorite } = require("../models");

const authorize = (req, res, next) => {
  Favorite.findAll({
    where: {
      userId: req.userId,
    },
  })
    .then((results) => {
      req.authorizedFavorites = results;
      next();
    })
    .catch(() => {
      console.log("Tidak ada favorite");
    });
};

module.exports = authorize
