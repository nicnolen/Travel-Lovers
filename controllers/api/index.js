const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const placeRoutes = require('./place-routes');
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/places', placeRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
