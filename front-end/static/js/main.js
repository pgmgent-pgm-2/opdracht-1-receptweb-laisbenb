async function getRecipes() {
    let recipes = await fetch('http://localhost:4201/recipes');
    recipes = await recipes.json();
    console.log(recipes);
    generateRecipes(recipes);
};


function generateRecipes(recipes) {
    //title, cookingtime, difficulty, servings
    const $recipe = document.getElementById('recipes');
    let html = "";
    for (const recipe in recipes) {
        console.log(recipe);
        html += `<article class="recipe-article">
        <h2>${recipes[recipe].title}</h2>
        <p>Cooking time: ${recipes[recipe].cookingTime}m</p>
        <p>Servings: ${recipes[recipe].servings} | Difficulty: ${recipes[recipe].difficulty}</p>
        </article>`
    };
    $recipe.innerHTML = html;
};

getRecipes();