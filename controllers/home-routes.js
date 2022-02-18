const router = require('express').Router();
const sequelize = require('../config/connection');
const { Place, Comment } = require('../models');

router.get('/', (req, res) => {
    Place.findAll({})
    res.render('homepage')
})

module.exports = router;