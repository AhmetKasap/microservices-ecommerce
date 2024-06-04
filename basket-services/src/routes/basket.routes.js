const express = require('express')

const router = express.Router()
const basketControllers = require('../controllers/basket')

router.get('/', basketControllers.getBasket)
router.post('/', basketControllers.postBasket)

module.exports = router