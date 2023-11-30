import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
function Category() {
  const [categories, setCategories] = useState(null);
  const getCategories = async () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_URL_BASE_API}/categories`,
    }).then((r) => setCategories(r.data));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Navbar />
      <div>Category</div>
      <ul className="list-group">
        {categories &&
          categories.map((category) => (
            <li key={category.id} className="list-group-item">
              <h2>{category.name}</h2>
              <ul>
                {category.products.map((product) => (
                  <li key={product.id}>{product.name}</li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
      <Footer />
    </>
  );
}

export default Category;
