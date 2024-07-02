const router = require('express').Router();
const homeRoutes = require('./home')
const portRoutes = require('./port')
const aboutRoutes = require('./about')
const contactRoutes = require('./contact')





router.use('/', homeRoutes);
router.use('/about', aboutRoutes);
router.use('/portfolio', portRoutes);
router.use('/contact', contactRoutes);



module.exports = router;
