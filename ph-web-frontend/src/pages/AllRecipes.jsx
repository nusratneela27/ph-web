import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { getAllRecipes } from "../api/recipes";
import { Button, TextInput } from "flowbite-react";
import Container from "../components/Shared/Container";
import { searchByText } from "../api/utils";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllRecipes().then((data) => {
      setRecipes(data);
    });
  }, []);

  const handleSearch = () => {
    searchByText(searchText).then((data) => {
      setRecipes(data);
    });
  };

  return (
    <Container>
      <div className="flex  place-content-center gap-3 mt-10">
        <TextInput
          type="text"
          color="success"
          className="w-1/4"
          placeholder="Search Recipe by title"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mx-20 my-16">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </Container>
  );
};

export default AllRecipes;
