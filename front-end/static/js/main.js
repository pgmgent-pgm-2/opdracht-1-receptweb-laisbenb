// FETCH RECIPES

async function getRecipes() {
    let recipes = await fetch('http://localhost:4201/recipes');
    recipes = await recipes.json();
    console.log(recipes);
    generateRecipes(recipes);
};

// GENERATE RECIPES ALL

function generateRecipes(recipes) {
    //title, cookingtime, difficulty, servings
    const $recipe = document.getElementById('recipes');
    let html = "";
    for (const recipe in recipes) {
        const recipeObj = recipes[recipe];
        //console.log(recipe);
        //console.log(recipes[recipe].image);
        html += `<article class="recipe-article" id="gay">
        <div class="image-box">
        <img src="./static/media/images/${recipeObj.image}" alt="${recipeObj.title}">
        </div>
        <h2>${recipeObj.title}</h2>
        <p>Cooking time: ${recipeObj.cookingTime}m</p>
        <p>Servings: ${recipeObj.servings} | Difficulty: ${recipeObj.difficulty}</p>
        <a href="detail.html?id=${recipeObj.id}">Detail</a>
        </article>`;
    };
    $recipe.innerHTML = html;
};

getRecipes();