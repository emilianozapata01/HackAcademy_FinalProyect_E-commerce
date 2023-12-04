import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import AboutThisProyect from "./pages/AboutThisProyect";
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
        <Route path="/product/:_id" element={<Product hovered={hovered} />} />
        {/* <Route path="/category" element={<Category />} /> */}
        <Route path="/category/:_id" element={<Category />} />
        <Route
          path="/about-this-proyect"
          element={<AboutThisProyect hovered={hovered} />}
        />
        <Route path="/cart" element={<Cart hovered={hovered} />} />
        <Route path="*" element={<NotFound hovered={hovered} />} />
      </Routes>
    </>
  );
}

export default App;
