// search by text
export const searchByText = async (text) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/recipeNameSearch/${text}`)
    const data = await response.json()
    return data
}