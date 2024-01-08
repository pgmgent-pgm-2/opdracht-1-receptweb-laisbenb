async function getRecipes() {
    let recipes = await fetch('http://localhost:4201/recipes');
    recipes = await recipes.json();
    console.log(recipes);
    generateRecipes(recipes);
};

getRecipes();

function generateRecipes(recipes) {
    //title, cookingtime, difficulty, servings
    const $recipe = document.getElementById('recipes');
    let html = "";
    for (const recipe in recipes) {
        html = `<article>
        <h2>${recipe.title}</h2>
        </article>`
    };
    $recipe.innerHTML = html;
};