const router = require('express').Router();
const sequelize = require('../config/connection');
const { Place, Comment } = require('../models');

// GET homepage for Place
router.get('/', (req, res) => {
  Place.findAll({});
  res.render('homepage');
});

// GET route to login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
