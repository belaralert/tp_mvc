const express = require('express');
const router = express.Router();

const {main,about} = require('../controllers/mainControllers')

router.get('/',main);
router.get('/about',about)

module.exports = router;