const router = require('express').Router();
const sequelize = require('../config/connection');
const { Place, Comment } = require('../models');

router.get('/', (req, res) => {
    Place.findAll({})
    .then(dbData => {
        console.log(dbData);
        res.render('homepage');
    })
    
})

module.exports = router;