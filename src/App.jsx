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
import Login from "./pages/Login";
import AllProducts from "./pages/AllProducts";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Profile from "./pages/Profile";

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
          path="/success"
          element={
            <Success
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
          path="/checkout"
          element={<Checkout setShowNavAndFooter={setShowNavAndFooter} />}
        />
        <Route
          path="/register"
          element={<Register setShowNavAndFooter={setShowNavAndFooter} />}
        />
        <Route
          path="/login"
          element={<Login setShowNavAndFooter={setShowNavAndFooter} />}
        />
        <Route
          path="/all-products"
          element={<AllProducts setShowNavAndFooter={setShowNavAndFooter} />}
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
        <Route
          path="/profile"
          element={
            <Profile setShowNavAndFooter={setShowNavAndFooter}
            hovered={hovered}/>
          }
        />
      </Routes>
    </>
  );
}

export default App;
