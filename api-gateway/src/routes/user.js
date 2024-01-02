const express = require('express')
const router = express.Router()

const userControllers = require('../controllers/user')
const authValidations = require('../middlewares/validations/auth.validations')

router.post('/register', authValidations.register, userControllers.register)
router.post('/login', authValidations.login, userControllers.login)

module.exports = router


