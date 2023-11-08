const router = require('express').Router();
const notesRoutes = require('./NRoutes');

router.use(notesRoutes);

module.exports = router;