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
        <div
          className="d-flex flex-column align-items-center pb-5 pt-4  "
          style={{ backgroundColor: "rgb(244, 238, 208)" }}
        >
          <h1
            className={` text-center text-dark ${HomeStyle.ourProductTitle} mb-4 woolwich`}
          >
            OUR PRODUCTS
          </h1>
          <div className={`${HomeStyle.categoryImgSection} d-flex flex-column`}>
            <div className="d-flex flex-wrap  justify-content-center">
              {categories.map((category) => (
                <Link
                  key={category._id}
                  to={`category/${category._id}`}
                  className={`${HomeStyle.categoryBoxSize}`}
                >
                  <img
                    className={HomeStyle.categoryBoxSizeCAN}
                    src={`${import.meta.env.VITE_URL_SUPABASE_IMG}${
                      category.image
                    }`}
                    alt={category.name}
                  />
                  <button
                    className={`${HomeStyle.buttonCategoriesSparkling} ${HomeStyle.textUppercase} woolwich`}
                  >
                    {category.name}
                  </button>
                </Link>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link to="/all-products">
                <button className={`woolwich ${HomeStyle.shopAllButton}`}>
                  SHOP ALL
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CategorySectionHome;
