import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import RecipeDetails from "../pages/RecipeDetails";
import PrivateRoute from "./PrivateRoute";
import AddRecipes from "../pages/AddRecipes";
import AllRecipes from "../pages/AllRecipes";
import { getRecipe } from "../api/recipes";
import CoinPurchase from "../pages/CoinPurchase";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/recipes",
        element: <AllRecipes></AllRecipes>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <RecipeDetails></RecipeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => getRecipe(params.id),
      },
      {
        path: "/add-recipes",
        element: (
          <PrivateRoute>
            <AddRecipes></AddRecipes>
          </PrivateRoute>
        ),
      },
      {
        path: "/coins",
        element: (
          <PrivateRoute>
            <CoinPurchase></CoinPurchase>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
