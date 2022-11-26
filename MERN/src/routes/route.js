const express = require('express');
const router = express.Router();
const { query, queryAdd } = require('../controllers/querry')

router.post('/test', queryAdd);
router.get('/test', query);


module.exports = router; 