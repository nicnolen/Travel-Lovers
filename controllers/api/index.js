/* USED FOR COLLECTING THE API ROUTES AND PACKAGING THEM */
// Import files and dependencies
const router = require('express').Router();
const userRoutes = require('./user-routes.js');

// Put the /users prefix before all the user routes
router.use('/users', userRoutes);

// Export module
module.exports = router;
