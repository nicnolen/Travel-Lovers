const router = require('express').Router();
const sequelize = require('../config/connection'); // TO DO build connection.js


router.get('/', (req, res) => {
    res.render('homepage')
})