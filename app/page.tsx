// Home Page Component
import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Find your next bite.</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}