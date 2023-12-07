const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')

const IngredientUserController = require('../controllers/ingredientUser')

router.get('/ingredients', verifyToken, IngredientUserController.read)

router.post('/ingredients', verifyToken, IngredientUserController.create)


module.exports = router

