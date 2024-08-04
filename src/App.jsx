import { Fragment } from "react";
import { recipes } from "./data.js";

const ingredientComponent = (ingredient) => {
  return <li key={ingredient}>{ingredient}</li>;
};

const RecipeComponent = ({ id, name, ingredients }) => {
  const ingredientList = ingredients.map((ingredient) =>
    ingredientComponent(ingredient)
  );
  return (
    <Fragment key={id}>
      <h2>{name}</h2>
      {ingredientList}
      <br></br>
    </Fragment>
  );
};

export default function RecipeList() {
  const recipeList = recipes.map((recipe) => (
    <RecipeComponent {...recipe} key={recipe.id} />
  ));
  return (
    <div>
      <h1>Recipes</h1>
      {recipeList}
    </div>
  );
}
