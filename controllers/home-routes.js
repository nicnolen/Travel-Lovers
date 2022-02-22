const router = require('express').Router();
const sequelize = require('../config/connection');
const { Place, Comment } = require('../models');

// GET homepage for Place
router.get('/', (req, res) => {
<<<<<<< HEAD
    Place.findAll({})
    .then(dbData => {
        console.log(dbData);
        res.render('homepage');
    })
    
})
=======
  Place.findAll({})
    .then((dbPostData) => {
      // loop over and map each Sequelize object into a serialized version, saving results in a new `posts` array
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      // Use res.render to specify which template you want to use as the first argument
      // And an object that includes the data you want to pass into the template as the second argument
      // NOTE .get({ plain: true }) converts Sequelize object down to a plain object
      res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});
>>>>>>> ce0bafd041a107cc2537382301d7964b1b031914

// GET route to login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/bucket-list', (req, res) => {
  Place.findAll({
    // include: [User],
  })
    .then((dbPlaceData) => {
      const places = dbPlaceData.map((place) => place.get({ plain: true }));

      res.render('bucket-list', {
        layout: 'main',
        places,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
