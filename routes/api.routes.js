const express = require('express');
const router = express.Router();
const apiController = require('../controller/api.controller');

router.post('/bfhl', apiController.processData);

module.exports = router;