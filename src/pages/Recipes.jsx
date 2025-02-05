import { useState } from "react";
import RecipeSearch from "../components/RecipeSearch";
import recipeBanner from "/assets/Banner.jpg"; 

export default function Recipes() {
  const [recipe, setRecipe] = useState("");

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: `url(${recipeBanner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        marginTop: "10px",
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-0"></div>

      <div className="relative z-10 text-center">
        <h1
          style={{
            color: "#E6B800",
            padding: "1px",
            marginLeft: "10px",
            paddingTop: "250px",
            fontSize: "100px",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
          }}
          className="text-4xl font-bold mb-6"
        >
          Find Recipes
        </h1>
        <RecipeSearch onSearch={setRecipe} />

        {recipe && (
          <div
            style={{
              color: "#F5DEB3",
              marginLeft: "500px",
              fontSize: "24px",
              marginTop: "20px",
              backgroundColor: "rgba(0,0,0,0.6)",
              padding: "20px",
              borderRadius: "10px",
              width: "50%",
              textAlign: "left",
            }}
            className="mt-4"
          >
            <h2 className="text-2xl font-bold">Generated Recipe:</h2>
            <p>{recipe}</p>
          </div>
        )}
      </div>
    </div>
  );
}
