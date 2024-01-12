const express = require('express');
const router = express.Router();
const { addRecipe, getRecipe } = require('../controllers/recipeController');

router.get('/recipes', getRecipe);
router.get('/recipes/:id', getRecipe);
router.post('/recipes', addRecipe);

module.exports = router;