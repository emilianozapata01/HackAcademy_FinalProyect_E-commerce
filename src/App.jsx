import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import AboutThisProyect from "./pages/AboutThisProyect";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AllProducts from "./pages/AllProducts";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Profile from "./pages/Profile";
import MuiNavbar from "./components/MuiNavbar";

function App() {
  const [showNavAndFooter, setShowNavAndFooter] = useState(true);
  return (
    <>
      <ToastContainer />
      {showNavAndFooter && <MuiNavbar />}
      <Routes>
        <Route
          path="/"
          element={<Home setShowNavAndFooter={setShowNavAndFooter} />}
        />
        <Route
          path="/product/:id"
          element={<Product setShowNavAndFooter={setShowNavAndFooter} />}
        />
        <Route
          path="/category/:id"
          element={<Category setShowNavAndFooter={setShowNavAndFooter} />}
        />
        <Route
          path="/about-this-proyect"
          element={
            <AboutThisProyect setShowNavAndFooter={setShowNavAndFooter} />
          }
        />
        <Route
          path="/success"
          element={<Success setShowNavAndFooter={setShowNavAndFooter} />}
        />
        <Route
          path="/cart"
          element={<Cart setShowNavAndFooter={setShowNavAndFooter} />}
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
          element={<NotFound setShowNavAndFooter={setShowNavAndFooter} />}
        />
        <Route
          path="/profile"
          element={<Profile setShowNavAndFooter={setShowNavAndFooter} />}
        />
      </Routes>
    </>
  );
}

export default App;
