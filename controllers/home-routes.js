const router = require('express').Router();
const sequelize = require('../config/connection');
const { Place, Comment } = require('../models');

// router.get('/', (req, res) => {
//     // Place.findAll({})
//     res.render('homepage')
// })
router.get("/bucket-list", (req, res) => {
  Place.findAll({
      // include: [User],
  })
      .then((dbPlaceData) => {
          const places = dbPlaceData.map((place) => place.get({ plain: true }));

          res.render("bucket-list", {
            layout: "main",
              places });
      })
      .catch((err) => {
          res.status(500).json(err);
      });
});
// GET all place for homepage
router.get("/", (req, res) => {
  Place.findAll({
      // include: [User],
  })
      .then((dbPlaceData) => {
          const places = dbPlaceData.map((place) => place.get({ plain: true }));

          res.render("homepage", {
              places });
      })
      .catch((err) => {
          res.status(500).json(err);
      });
});

module.exports = router;