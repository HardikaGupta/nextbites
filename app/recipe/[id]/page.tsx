import { notFound } from "next/navigation";
import { getRecipe } from "../../data/recipes";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ fontSize: "4rem" }}>{recipe.emoji}</div>
      <h1>{recipe.title}</h1>
      <p style={{ color: "#666" }}>
        {recipe.cuisine} • ⏱ {recipe.minutes} min • {recipe.difficulty}
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <h2>Method</h2>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </main>
  );
}