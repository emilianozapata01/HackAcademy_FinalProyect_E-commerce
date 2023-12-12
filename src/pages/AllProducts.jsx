import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import AddToCart from "../components/AddToCart";
import CategoryStyle from "../styles/views/Category.module.css";
import ButtonUp from "../components/ButtonUp";
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
      <ButtonUp />
      <div>
        {categories &&
          categories.map((category) => (
            <div key={category._id}>
              <p className={`${CategoryStyle.titleCategory} woolwich`}>
                {category.name}
              </p>
              <div className="d-flex flex-column mt-5">
                <ul className="d-flex flex-wrap justify-content-center">
                  {category.products.map((product) => (
                    <li key={product._id} className="d-flex flex-column">
                      <Link
                        className={CategoryStyle.customLink}
                        to={`/product/${product._id}`}
                        key={product._id}
                      >
                        <div className={`${CategoryStyle.categoryBoxSize}`}>
                          <img
                            className={CategoryStyle.categoryBoxSizeCAN}
                            src={product.image}
                            alt=""
                          />{" "}
                        </div>
                        <p
                          className={`${CategoryStyle.productName} woolwich d-flex justify-content-center`}
                        >
                          {product.name}
                        </p>
                        <p
                          className={`${CategoryStyle.productName} woolwich d-flex justify-content-center`}
                        >
                          ${product.price}
                        </p>
                      </Link>
                      <div className="d-flex justify-content-center mb-5 woolwich">
                        <AddToCart
                          product={product}
                          qty={1}
                          classBtn={`${CategoryStyle.customBtn} ${CategoryStyle.customBtnPrimeProduct}`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
}

export default AllProducts;
