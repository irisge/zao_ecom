const express = require('express');

const produitsRouter = require('./produits.routes');

const router = express.Router();

router.use('/produits', produitsRouter);

module.exports = router;
