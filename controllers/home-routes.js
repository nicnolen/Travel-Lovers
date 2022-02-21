const router = require('express').Router();
const sequelize = require('../config/connection');
const { Place, Comment } = require('../models');

router.get('/', (req, res) => {
    // Place.findAll({})
    res.render('homepage')
})
router.get('/bucket-list', (req, res) => {
    // Place.findAll({})
    res.render('bucket-list')
})
// GET all galleries for homepage
router.get('/place', async (req, res) => {
  try {
    const dbPlaceData = await Place.findAll({
      include: [
        {
          model: Place,
          attributes: ['city', 'date'],
        },
      ],
    });

    const places = dbPlaceData.map((place) =>
      place.get({ plain: true })
        );

    res.render('bucket-list', {
        places,
        loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    });

module.exports = router;