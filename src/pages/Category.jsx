import Footer from "../components/Footer";
import CategoryStyle from "../styles/views/Category.module.css";
import ButtonUp from "../components/ButtonUp";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddToCart from "../components/AddToCart";

function Category({ setShowNavAndFooter }) {
  // setShowNavAndFooter(true);

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
    setShowNavAndFooter(true);
    getCategory();
  }, [params.id]);
  return (
    <>
      {" "}
      {categories != null && categories.length != 0 ? (
        <div>
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
                      {category.products.map((product) => {
                        return (
                          <li
                            key={product._id}
                            className={`d-flex flex-column ${CategoryStyle.zoomDivProduct}`}
                          >
                            <Link
                              className={`${CategoryStyle.customLink} position-relative`}
                              to={`/product/${product._id}`}
                              key={product._id}
                            >
                              <div
                                className={`${CategoryStyle.categoryBoxSize} `}
                              >
                                <img
                                  className={CategoryStyle.categoryBoxSizeCAN}
                                  src={`${
                                    import.meta.env.VITE_URL_SUPABASE_IMG
                                  }${product.image}`}
                                  alt=""
                                />{" "}
                              </div>
                              <div
                                style={{
                                  display: product.stock > 0 ? "none" : "block",
                                }}
                              >
                                <img
                                  className={`${CategoryStyle.noStock1} woolwich text-danger position-absolute d-flex`}
                                  src="https://png.pngtree.com/png-vector/20220111/ourmid/pngtree-out-of-stock-symbol-rectangular-sign-vector-png-image_15673910.png"
                                  alt=""
                                />
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
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
          <Footer />
        </div>
      ) : (
        <div
          className="w-100 d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <span className="loader"></span>
        </div>
      )}
    </>
  );
}

export default Category;
