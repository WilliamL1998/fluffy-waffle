const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');

router.use('/dashboard', dashboardRoutes)
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;