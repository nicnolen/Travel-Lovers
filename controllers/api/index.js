const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const placeRoutes = require('./place-routes');

router.use('/places', placeRoutes);
router.use('/comments', commentRoutes);

module.exports = router;