async function getRecipes() {
    const recipes = await fetch('http://localhost:4201/recipes');
    recipes = await recipes.json();
    console.log(recipes);
};

getRecipes();