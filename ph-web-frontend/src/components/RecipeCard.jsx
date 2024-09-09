import Container from "./Shared/Container";
import { Button, Card } from "flowbite-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { setCoinValue } from "../api/auth";
import { updateRecipe } from "../api/recipes";

const RecipeCard = ({ recipe }) => {
  const { user, coin, setCoin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleViewDetails = async () => {
    if (!user) {
      toast.error("Please log in with Google");
      return;
    }

    if (
      user.email === recipe.host.email ||
      recipe.purchased_by.includes(user.email)
    ) {
      navigate(`/details/${recipe._id}`);
      return;
    }

    if (coin < 10) {
      navigate("/coins");
      toast.error("You do not have enough coins. Please purchase more coins.");
      return;
    }

    const confirmation = window.confirm(
      "Are you sure you want to spend 10 coins to view this recipe?"
    );
    if (!confirmation) {
      return;
    }

    const newCoinValue = coin - 10;

    // Update coin value on the server
    await setCoinValue(user.email, newCoinValue);
    setCoin(newCoinValue);

    // Update recipe data on the server
    const updatedRecipe = {
      ...recipe,
      purchased_by: [...recipe.purchased_by, user.email],
      watchCount: recipe.watchCount + 1,
    };
    await updateRecipe(recipe._id, updatedRecipe);

    toast.success("10 coins deducted and recipe purchased successfully.");
    navigate(`/details/${recipe._id}`);
  };

  return (
    <Container>
      <Card className="max-w-sm" imgSrc={recipe.image} imgAlt={recipe.name}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
          {recipe.name}
        </h5>
        <p className="font-normal text-gray-700">
          Created By: {recipe.host.email}
        </p>
        <p className="font-normal text-gray-700">Country: {recipe.country}</p>
        <div className="font-normal text-gray-700">
          <p>Purchased By:</p>
          <ul>
            {recipe.purchased_by.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        </div>
        <Button
          onClick={handleViewDetails}
          size="xs"
          outline
          gradientDuoTone="tealToLime"
        >
          View Details
        </Button>
      </Card>
    </Container>
  );
};

export default RecipeCard;
