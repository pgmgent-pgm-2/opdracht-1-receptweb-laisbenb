const express = require("express");
const router = express.Router();
const { addRecipe, getRecipe } = require("../controllers/recipeController");

router.get("/recipes/:id", getRecipe);
router.get("/recipes", getRecipe);
router.post("/recipes", addRecipe);
//router.delete("/recipes/:id", recipeController.deleteRecipe);

module.exports = router;
