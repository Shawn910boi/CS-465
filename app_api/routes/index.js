console.log('✅ API index router loaded from:', __filename);

const express = require('express');
const router = express.Router();

const tripsRouter = require('./trips');
const authRouter = require('./auth');

// /api/trips -> tripsRouter
router.use('/trips', tripsRouter);
router.use('/auth', authRouter);

module.exports = router;
