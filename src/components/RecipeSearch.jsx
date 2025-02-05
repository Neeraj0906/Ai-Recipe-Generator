import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function RecipeSearch({ onSearch }) {
  const [ingredients, setIngredients] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (ingredients.trim() === "") return;

    setLoading(true);
    setError("");

    try {
      // Update the URL to point to the deployed backend URL on Render
      const response = await fetch("https://recipe-backend-fsd.onrender.com/api/recipes/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients: ingredients.split(",") }),
      });

      const data = await response.json();

      if (response.ok) {
        onSearch(data.steps || []);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    }

    setLoading(false);
  };

  return (
    <motion.div
      style={{ marginLeft: "-10px", marginTop: "20px" }}
      className="flex flex-col items-center space-y-6 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <TextField
        label="Enter ingredients (comma separated)"
        variant="outlined"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-80"
        InputProps={{
          style: {
            borderRadius: "8px",
            padding: "10px",
            height: "50px",
            width: "400px",
            backgroundColor: "#FAEBD7",
            border: "2px solid #5C4033",
            color: "#5C4033",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          },
        }}
        InputLabelProps={{ style: { color: "#5C4033" } }}
      />

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="contained"
          onClick={handleSearch}
          disabled={loading}
          style={{
            padding: "10px 20px",
            marginLeft: "600px",
            marginTop: "-80px",
            borderRadius: "8px",
            backgroundColor: "#D2691E",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            color: "white",
          }}
        >
          {loading ? "Searching..." : "Search Recipes"}
        </Button>
      </motion.div>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </motion.div>
  );
}
