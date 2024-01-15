const fsp = require('fs/promises');
const path = require('path');

async function getContentFromFile(filePath) {
    const data = await fsp.readFile(filePath, "utf-8");
    return JSON.parse(data);
};

async function getRecipe(request, response) {
    const { id } = request.params;
    const recipesPath = path.join(__dirname, "..", "data", "recipes.json");
    let recipes = await getContentFromFile(recipesPath);

    if (id) {
        recipes = recipes.find(recipe => recipe.id === parseInt(id));
    }
    response.json(recipes);
};

function addRecipe(request, response) {
    console.log(request.body);
};

module.exports = {
    getRecipe,
    addRecipe
};