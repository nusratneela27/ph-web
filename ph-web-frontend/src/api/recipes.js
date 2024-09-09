// Add a recipe
export const addRecipes = async recipeData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/add-recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(recipeData),
    })

    const data = await response.json()
    return data
}

// Get all Recipes
export const getAllRecipes = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/recipes`)
    const data = await response.json()
    return data
}

// Get Single Recipe
export const getRecipe = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/recipe/${id}`)
    const data = await response.json()
    return data
}

// Update Recipe
export const updateRecipe = async (id, recipeData) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/recipes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
    });

    const data = await response.json();
    return data;
};
