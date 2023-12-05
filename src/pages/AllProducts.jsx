import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CategoryStyle from "../styles/views/Category.module.css";

function AllProducts() {
  const [categories, setCategories] = useState(null);
  const getCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_BASE_API}/category`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <ul className="list-group">
        {categories &&
          categories.map((category) => (
            <li key={category._id} className="list-group-item ">
              <p className={`${CategoryStyle.titleCategory} woolwich`}>
                {category.name}
              </p>
              <div className="d-flex flex-column mt-5">
                <ul className="d-flex flex-wrap justify-content-center">
                  {category.products.map((product) => (
                    <Link
                      className={CategoryStyle.customLink}
                      to={`/product/${product._id}`}
                      key={product._id}
                    >
                      <li className="d-flex flex-column">
                        <div className={`${CategoryStyle.categoryBoxSize}`}>
                          <img
                            className={CategoryStyle.categoryBoxSizeCAN}
                            src={product.image}
                            alt=""
                          />{" "}
                        </div>
                        <p className="d-flex justify-content-center">
                          <strong>{product.name}</strong>
                        </p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </li>
          ))}
      </ul>
      <Footer />
    </>
  );
}

export default AllProducts;
