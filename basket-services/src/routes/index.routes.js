const express = require('express')
const router = express.Router()



const basketRoutes = require('./basket.routes')
router.use(basketRoutes)

module.exports = router