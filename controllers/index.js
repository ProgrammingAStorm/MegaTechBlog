const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashRoutes = require('./dash-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;