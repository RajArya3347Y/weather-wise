const express = require('express')

const router = express.Router()

router.use('/',express.static('./Projects/weather-wise/src'))

module.exports = router;