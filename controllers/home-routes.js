const router = require('express').Router();
const sequelize = require('../config/connection'); // TO DO build connection.js
const { Places, Comment } = require('../models');

router.get('/', (req, res) => {
    Places.findAll({})
    res.render('homepage')
})