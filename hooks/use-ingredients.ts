import { Api } from "../services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";

export const useIngredients = () => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let isMounted = true;
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        if (isMounted) setIngredients(ingredients);
      } catch (error) {
        if (isMounted) console.log(error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchIngredients();
    return () => {
      isMounted = false;
    };
  }, []);

  return {
    ingredients,
    loading,
  };
};
