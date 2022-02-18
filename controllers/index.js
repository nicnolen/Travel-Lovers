/* USED TO COLLECT THE PACKAGED API ROUTES */
// Import files and dependencies
const router = require('express').Router();
const apiRoutes = require('./api');

// Prefix the routes in the api folder with /api
router.use('/api', apiRoutes);

// Error if there is a request to an incorrect endpoint
router.use((req, res) => {
  res.status(404).end;
});

// Export the module
module.exports = router;
