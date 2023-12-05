import Footer from "../components/Footer";
import CategoryStyle from "../styles/views/Category.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Category({ setShowNavAndFooter }) {
  setShowNavAndFooter(true);
  const params = useParams();
  const [categories, setCategories] = useState(null);
  const getCategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_BASE_API}/category`
      );
      const filteredCategory = response.data.filter(
        (category) => category._id === params.id
      );

      setCategories(filteredCategory);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, [params._id]);

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

export default Category;
