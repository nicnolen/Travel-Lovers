const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes.js');
const weatherRoutes = require('./weather-routes.js');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/weather', weatherRoutes);

module.exports = router;
