import { Link } from "react-router-dom";
import HomeStyle from "../styles/views/Home.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function CategorySectionHome() {
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
      {categories && (
        <div className="d-flex flex-column mt-5 align-items-center">
          <h1
            className={`text-center text-dark ${HomeStyle.ourProductTitle} mb-4`}
          >
            OUR PRODUCTS
          </h1>
          <div className="d-flex flex-column w-50 ">
            <div className="d-flex flex-wrap justify-content-center">
              {categories.map((category) => (
                <Link
                  key={category._id}
                  to={`category/${category._id}`}
                  className={`${HomeStyle.categoryBoxSize}`}
                >
                  <img
                    className={HomeStyle.categoryBoxSizeCAN}
                    src={category.image}
                    alt={category.name}
                  />
                  <button
                    className={`${HomeStyle.buttonCategoriesSparkling} ${HomeStyle.textUppercase}`}
                  >
                    {category.name}
                  </button>
                </Link>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link to="/all-products">
                <button className={HomeStyle.shopAllButton}>SHOP ALL</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CategorySectionHome;
