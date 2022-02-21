const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api')
const homeRoutes = require('./home-routes');
// const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);


module.exports = router; 
// Error if there is a request to an incorrect endpoint
router.use((req, res) => {
  res.status(404).end;
});


// Export the module
module.exports = router;
