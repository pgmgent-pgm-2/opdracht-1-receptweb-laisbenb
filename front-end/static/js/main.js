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

// ADD RECIPE

function addRecipe() {
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    const cookingTime = parseInt(document.getElementById('cookingtime').value, 10);
    const difficulty = document.getElementById('difficulty').value;
    const servings = parseInt(document.getElementById('servings').value, 10);

    const newRecipe = {
        title,
        category,
        instructions,
        cookingTime,
        difficulty,
        servings
    };

    return newRecipe;

    alert('New recipe added!');
};
