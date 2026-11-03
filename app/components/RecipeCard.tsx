import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
      <div style={{ fontSize: "2rem" }}>{recipe.emoji}</div>
      <h3>{recipe.title}</h3>
      <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "#666" }}>
        <span>⏱ {recipe.minutes} min</span>
        <span>•</span>
        <span>{recipe.difficulty}</span>
        <span>•</span>
        <span>{recipe.cuisine}</span>
      </div>
    </div>
  );
}