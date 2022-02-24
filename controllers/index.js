/* USED TO COLLECT THE PACKAGED API ROUTES */
// Import files and dependencies
const router = require('express').Router();
const apiRoutes = require('./api/')
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');


// Prefix the routes in the api folder with /api
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

// Error if there is a request to an incorrect endpoint
router.use((req, res) => {
  res.status(404).end;
});

// Export the module
module.exports = router;
