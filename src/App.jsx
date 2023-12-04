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
import Register from "./pages/Register";

function App() {
  const [hovered, setHovered] = useState(false);
  const [showNavAndFooter, setShowNavAndFooter] = useState(true);
  return (
    <>
      {showNavAndFooter && <NavBar setHovered={setHovered} />}
      <Routes>
        <Route
          path="/"
          element={
            <Home setShowNavAndFooter={setShowNavAndFooter} hovered={hovered} />
          }
        />
        <Route
          path="/product/:id"
          element={
            <Product
              setShowNavAndFooter={setShowNavAndFooter}
              hovered={hovered}
            />
          }
        />
        <Route
          path="/category/:id"
          element={<Category setShowNavAndFooter={setShowNavAndFooter} />}
        />
        <Route
          path="/about-this-proyect"
          element={
            <AboutThisProyect
              setShowNavAndFooter={setShowNavAndFooter}
              hovered={hovered}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart setShowNavAndFooter={setShowNavAndFooter} hovered={hovered} />
          }
        />
        <Route
          path="/register"
          element={<Register setShowNavAndFooter={setShowNavAndFooter} />}
        />
        <Route
          path="*"
          element={
            <NotFound
              setShowNavAndFooter={setShowNavAndFooter}
              hovered={hovered}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
