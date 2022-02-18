const router = require('express').Router();
const sequelize = require('../config/connection');
const { Places, Comment } = require('../models');

router.get('/', (req, res) => {
    Places.findAll({})
    res.render('homepage')
})