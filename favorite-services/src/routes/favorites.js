const express = require('express')
const router = express.Router()

const {getFavorites,postFavorites,deleteFavorites} = require('../controllers/favorites')

router.get('/', getFavorites)
router.post('/', postFavorites)
router.delete('/', deleteFavorites)


module.exports = router