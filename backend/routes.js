const express = require('express');
const router = express.Router();
const metricsController = require('./metricsController');

// Endpoint to get system metrics
router.get('/', metricsController.getMetrics);

module.exports = router;
