// FETCH RECIPES

async function getRecipes(id) {
    let recipes = await fetch(`http://localhost:4201/recipes/${id}`);
    recipes = await recipes.json();
    console.log(recipes);

    return recipes;
};

// DETAIL

async function getDetail() {
    const URL = window.location.search;
    const searchParams = new URLSearchParams(URL);
    const id = searchParams.get('id');

    const selectedRecipe = await getRecipes(id);
    console.log(selectedRecipe);
    const ingredients = selectedRecipe.ingredients;
    console.log(ingredients);
    

    const ingredientList = document.getElementById('ingredient-list');
    let ingredientsHTML = "<h2>Ingredients</h2>";
    for (const ingredient of ingredients) {
        console.log(ingredient);
        ingredientsHTML += `<li>${ingredient.amount} of ${ingredient.name}</li>`;
        console.log(ingredientsHTML);
        ingredientList.innerHTML = ingredientsHTML;
    };
    
    document.getElementById('title-image').innerHTML = `<div class="detailcontainer">
    <h1>${selectedRecipe.title}</h1><p>Servings: ${selectedRecipe.servings}</p>
    <img class="detail-image" src="static/media/images/${selectedRecipe.image}">
    </div>`;

    document.getElementById('instructions').innerHTML = `<div>
    <p>
    ${selectedRecipe.instructions} <br>
    The cooking time wil be around ${selectedRecipe.cookingTime} minutes.
    </p>
    <p class="difficulty-${selectedRecipe.difficulty}">${selectedRecipe.difficulty}</p>
    </div>`
};

getDetail();