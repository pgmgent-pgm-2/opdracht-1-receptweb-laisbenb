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
    
    document.getElementById('detail-page').innerHTML = `<div>
    <h1>${selectedRecipe.title}</h1>
    <img id="detail-image" src="static/media/images/${selectedRecipe.image}">
    
    </div>`;
};

getDetail();