const { v4: getId } = require("uuid");
const fsp = require("fs/promises");
const path = require("path");
const recipesPath = path.join(__dirname, "..", "data", "recipes.json");

async function getContentFromFile(filePath) {
  const data = await fsp.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

async function getRecipe(request, response) {
  const { id } = request.params;
  let recipes = await getContentFromFile(recipesPath);

  if (id) {
    recipes = recipes.find((recipe) => recipe.id == id);
  }
  response.json(recipes);
}

async function addRecipe(request, response) {
  let recipes = request.body;
  const data = await fsp.readFile(recipesPath, "utf-8");
  const jsonData = JSON.parse(data);
  jsonData.push({ id: getId(), ...recipes });
  await fsp.writeFile(recipesPath, JSON.stringify(jsonData), null, 2);
}

async function deleteRecipe(request, response) {
  let recipes = request.body;
  if (id) {
    const data = await fsp.readFile(recipesPath, "utf8");
    const recipe = JSON.parse(data);
    const deletedRecipe = recipes.filter((recipe) => recipe.id !== id);
    await fsp.writeFile(
      recipesFilePath,
      JSON.stringify(deletedRecipe, null, 2),
      "utf8"
    );
  }
}

module.exports = {
  getRecipe,
  addRecipe,
  deleteRecipe,
};
