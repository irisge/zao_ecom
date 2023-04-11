const express = require('express');

const usersRouter = require('./users.routes');
const produitsRouter = require('./produits.routes');
const authRouter = require('./auth.routes');

const router = express.Router();

router.use('/users', usersRouter);
router.use('/produits', produitsRouter);
router.use(authRouter);

module.exports = router;
