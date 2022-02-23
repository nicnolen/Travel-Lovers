const router = require("express").Router();
const {Place, User, Post } = require("../models/");
const withAuth = require("../utils/auth");

router.get('/', (req, res) => {
  Place.findAll({})
  .then(placeData => {
    console.log(placeData)
    res.render('dashboard');
  })  
})

module.exports = router;
