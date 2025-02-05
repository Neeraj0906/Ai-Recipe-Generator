import React from "react";
import { Box, Typography, Button, Card, CardContent, CardMedia, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div style={{ padding: "50px" }} className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="flex items-center justify-center bg-blue-500 text-white p-10 md:p-20">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Box
            sx={{
              textAlign: "center",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: 3,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: "2.5rem" }}>
              Welcome to AI Recipe Generator
            </Typography>
            <Typography variant="h6" sx={{ marginTop: "10px", fontSize: "1.2rem" }}>
              Explore delicious recipes tailored just for you with the power of AI.
            </Typography>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  border: "2px solid white",
                }}
              >
                Explore Now
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </div>

     {/* About Us Section */}
<div style={{marginTop:"5px"}} className="p-10 text-center bg-white shadow-lg rounded-lg mx-10 mt-10">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Box
      sx={{
        textAlign: "center",
        borderRadius: "15px",
        padding: "30px",
        boxShadow: 3,
        backgroundColor: "rgba(255, 165, 0, 0.6)", // Warm orange overlay
      }}
    >
      {/* Title Animation */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 1 }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}>
          About Us
        </Typography>
      </motion.div>

      <Box sx={{ maxWidth: "800px", margin: "20px auto" }}>
        {/* Body Text Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Typography
            variant="body1"
            sx={{
              marginTop: "20px",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              color: "#fff", // Ensures the text is readable on the new background
            }}
          >
            AI Recipe Generator helps you discover recipes based on your preferences, dietary restrictions, and available
            ingredients. With the help of artificial intelligence, we provide personalized meal options and even suggest
            grocery lists to make your cooking experience easier and more fun!
          </Typography>
        </motion.div>
      </Box>
    </Box>
  </motion.div>
</div>


      {/* Featured Recipes Section */}
<div className="p-10 bg-gray-200 text-center mt-10">
  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2D3748" }}>
    Featured Recipes
  </Typography>
  <Typography variant="h6" sx={{ marginTop: "10px", fontSize: "1.1rem", color: "#4A5568" }}>
    Check out these mouth-watering recipes that our AI has curated just for you!
  </Typography>

  <div style={{ display: "flex", gap: "10px" }} className="flex flex-wrap justify-center gap-6 mt-10">
    {/* Recipe 1 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group"
    >
      <Card sx={{ maxWidth: 345, borderRadius: "15px", marginTop: "20px", backgroundColor: "#FFF", boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="200"
          image="/assets/recipe-1.jpg" // Replace with actual image path
          alt="Spaghetti Carbonara"
          sx={{ objectFit: "cover", width: "100%", height: "200px", borderRadius: "15px" }} // Uniform size for all images
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2D3748" }}>
            Spaghetti Carbonara
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "10px", color: "#4A5568" }}>
            A delicious and creamy Italian pasta with eggs, cheese, pancetta, and pepper. Perfect for a cozy dinner!
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "5px", color: "gray" }}>
            Ingredients: Spaghetti, eggs, pancetta, parmesan, black pepper
          </Typography>
        </CardContent>
      </Card>
    </motion.div>

    {/* Recipe 2 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group"
    >
      <Card sx={{ maxWidth: 345, borderRadius: "15px", marginTop: "20px", backgroundColor: "#FFF", boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="200"
          image="/assets/recipe-2.jpg" // Replace with actual image path
          alt="Veggie Stir-Fry"
          sx={{ objectFit: "cover", width: "100%", height: "200px", borderRadius: "15px" }} // Uniform size for all images
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2D3748" }}>
            Veggie Stir-Fry
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "10px", color: "#4A5568" }}>
            A quick and healthy stir-fry with a variety of fresh vegetables. A perfect meal for a light lunch or dinner!
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "5px", color: "gray" }}>
            Ingredients: Broccoli, carrots, bell peppers, soy sauce, garlic
          </Typography>
        </CardContent>
      </Card>
    </motion.div>

    {/* Recipe 3 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group"
    >
      <Card sx={{ maxWidth: 345, borderRadius: "15px", marginTop: "20px", backgroundColor: "#FFF", boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="200"
          image="/assets/recipe-3.jpg" // Replace with actual image path
          alt="Chicken Tacos"
          sx={{ objectFit: "cover", width: "100%", height: "200px", borderRadius: "15px" }} // Uniform size for all images
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2D3748" }}>
            Chicken Tacos
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "10px", color: "#4A5568" }}>
            Flavorful chicken tacos with all the toppings you love! Quick and easy to make for taco night and for ever.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "5px", color: "gray" }}>
            Ingredients: Chicken, tortillas, lettuce, salsa, avocado
          </Typography>
        </CardContent>
      </Card>
    </motion.div>

    {/* Recipe 4 (Golden-glazed carrot, mushroom & hazelnut tart) */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group"
    >
      <Card sx={{ maxWidth: 345, borderRadius: "15px", marginTop: "20px", backgroundColor: "#FFF", boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="200"
          image="/assets/recipe-4.jpg" // Replace with actual image path
          alt="Golden-glazed carrot, mushroom & hazelnut tart"
          sx={{ objectFit: "cover", width: "100%", height: "200px", borderRadius: "15px" }} // Uniform size for all images
        />
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2D3748" }}>
            Golden-glazed Carrot, Mushroom & Hazelnut Tart
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "10px", color: "#4A5568" }}>
            A savory tart with golden-glazed carrots, earthy mushrooms, and crunchy hazelnuts!
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "5px", color: "gray" }}>
            Ingredients: Carrots, mushrooms, hazelnuts, puff pastry, garlic
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  </div>
</div>


      {/* Ready to Start Section */}
<div className="p-10 text-center bg-white shadow-lg rounded-lg mx-10 mt-10">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Box
      sx={{
        textAlign: "center",
        borderRadius: "15px",
        padding: "30px",
        boxShadow: 3,
        backgroundColor: "rgba(0, 123, 255, 0.6)", // Same light blue background as the Featured Recipes
      }}
    >
      {/* Section Title */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 1 }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}>
          Ready to Start?
        </Typography>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            padding: "15px 30px",
            marginTop: "30px",
            backgroundColor: "#FF7F50", // Coral color for the button
            color: "#fff",
            fontSize: "1.2rem",
            borderRadius: "5px",
            cursor: "pointer",
            border: "none",
          }}
        >
          Start Cooking Now!
        </motion.button>
      </motion.div>
    </Box>
  </motion.div>
</div>

    </div>
  );
}
