import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <AppBar
      position="sticky" // Make navbar sticky
      sx={{
        backgroundColor: "#1976d2",
        padding: "5px 20px",
        top: 0, // Sticks at the top
        zIndex: 1000, // Ensures it's on top of other elements
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side - Logo & Title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img
            src="/assets/Recipe-logo.png"
            alt="logo"
            width="50"
            height="50"
            style={{ borderRadius: "50%" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "30px" }}>
            AI Recipe Generator
          </Typography>
        </Box>

        {/* Right Side - Navigation Links */}
        {isMobile ? (
          // Mobile View: Hamburger Menu
          <Box onClick={() => setMenuOpen(!isMenuOpen)} sx={{ cursor: "pointer" }} aria-label="Menu">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MenuIcon sx={{ color: "white", fontSize: "40px" }} />
            </motion.div>
          </Box>
        ) : (
          // Desktop View: Links
          <Box sx={{ display: "flex", gap: 3 }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/" style={linkStyle}>Home</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/recipes" style={linkStyle}>Recipes</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/contactus" style={linkStyle}>Contact Us</Link>
            </motion.div>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Menu with Fade-In Effect */}
      {isMenuOpen && isMobile && (
        <Box
          sx={{
            backgroundColor: "#1976d2",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            transition: "opacity 0.3s ease-in-out",
            opacity: 1,
          }}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/" style={linkStyle}>Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/recipes" style={linkStyle}>Recipes</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/contactus" style={linkStyle}>Contact Us</Link>
          </motion.div>
        </Box>
      )}
    </AppBar>
  );
}

// Styles for the links with enhanced hover effect
const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "bold",
  transition: "color 0.3s, transform 0.3s",
  ":hover": {
    color: "#fbc02d", // Yellow color on hover
    transform: "scale(1.05)",
  },
};
