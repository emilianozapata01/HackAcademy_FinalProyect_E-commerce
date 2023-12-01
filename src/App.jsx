import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import NavBar from "./components/Navbar";

function App() {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <NavBar setHovered={setHovered} />
      <Routes>
        <Route path="/" element={<Home hovered={hovered} />} />
        <Route path="/product" element={<Product hovered={hovered} />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about-us" element={<AboutUs hovered={hovered} />} />
        <Route path="/cart" element={<Cart hovered={hovered} />} />
        <Route path="*" element={<NotFound hovered={hovered} />} />
      </Routes>
    </>
  );
}

export default App;
