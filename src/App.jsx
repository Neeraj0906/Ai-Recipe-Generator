import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import ContactUs from "./pages/ContactUs";  // Updated to ContactUs
import './index.css'; // Or the path to your CSS file

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contactus" element={<ContactUs />} />  {/* Updated route */}
      </Routes>
    </>
  );
}
