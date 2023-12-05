import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductStyle from "../styles/views/Product.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Product({ hovered, setShowNavAndFooter }) {
  // setShowNavAndFooter(true);
  const params = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_BASE_API}/product/${params.id}`
      );

      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    setShowNavAndFooter(true);
    getProduct();
  }, [params.id]);

  const [value, setValue] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const increaseValue = () => {
    setValue(value + 1);
  };

  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addToCart({ item: product, qty: 1 }));
  };

  return (
    <>
      {product && (
        <div key={product._id} className={hovered ? "bg-dark-hover-nav " : ""}>
          <div className="container">
            <div className="row">
              <div className="col-12 fw-bold ps-5">
                <Link className="text-decoration-none text-dark" to={"/"}>
                  <span> Home </span>
                </Link>
                <span>
                  <i className="bi bi-arrow-right"></i>
                </span>
                <Link className="text-decoration-none text-dark" to={"/"}>
                  <span> All </span>
                </Link>
                <span>
                  <i className="bi bi-arrow-right"></i> TURMERIC GINGER TONIC
                </span>
              </div>

              <div className="col-6">
                <Carousel
                  nextIcon={
                    <span className={ProductStyle.customCarouselIcon}>
                      <i className="bi bi-caret-right"></i>
                    </span>
                  }
                  prevIcon={
                    <span className={ProductStyle.customCarouselIcon}>
                      <i className="bi bi-caret-left"></i>
                    </span>
                  }
                >
                  <Carousel.Item interval={500}>
                    <img
                      className="img-fluid"
                      src={product.image}
                      alt="TURMERIC GINGER TONIC"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      className="img-fluid"
                      src={product.image}
                      alt="TURMERIC GINGER TONIC"
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-6 d-grid gap-1 ">
                <h4>{product.name}</h4>
                <span className={ProductStyle.fontProduct}>
                  ${product.price}
                </span>
                <p className={ProductStyle.fontProduct}>
                  {product.description}
                </p>

                <p className={ProductStyle.fontProduct}>
                  Organic{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    fill="currentColor"
                    className="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>{" "}
                  Non-GMO{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    fill="currentColor"
                    className="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>{" "}
                  Gluten Free{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    fill="currentColor"
                    className="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>{" "}
                  Vegan
                </p>
                <p className={ProductStyle.fontProduct}>
                  *These statements have not been evaluated by the FDA. This
                  product is not intended to diagnose, treat, cure, or prevent
                  any disease.
                </p>
                <div>
                  <button
                    className={ProductStyle.buttonSize}
                    onClick={decreaseValue}
                    disabled={value === 1}
                  >
                    -
                  </button>
                  <input
                    className={`text-center ${ProductStyle.inputSize}`}
                    type="number"
                    value={value}
                    readOnly
                  />
                  <button
                    className={ProductStyle.buttonSize}
                    onClick={increaseValue}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleCart}
                  className={`${ProductStyle.customBtn} ${ProductStyle.customBtnPrimeProduct}`}
                >
                  ADD TO CART
                </button>

                <p className={`text-success ${ProductStyle.fontProduct}`}>
                  Local pick up and delivery only. Order by 11am and we will
                  have your order delivered in your desired pickup or delivery
                  window.
                </p>
                <p className={ProductStyle.fontProduct}>
                  {product.ingredients}
                </p>
                <p className={ProductStyle.fontProduct}>
                  *Certified Organic Ingredients
                </p>
              </div>
              <div className="row mt-5">
                <h2 className="text-center">YOU MAY ALSO LIKE</h2>

                <div className="col-4 text-center gap-4 d-grid">
                  <div
                    className={ProductStyle.imageContainer}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      className={`${ProductStyle.originalImage} ${
                        isHovered ? "hidden" : ""
                      }`}
                      src="https://juiceshop.com/cdn/shop/products/detox-1_800x.jpg?v=1672529675"
                      alt="Original"
                    />
                    <img
                      className={`${ProductStyle.hoverImage} ${
                        isHovered ? "" : "hidden"
                      }`}
                      src="https://juiceshop.com/cdn/shop/products/detox-2_800x.jpg?v=1672529726"
                      alt="Hover"
                    />
                  </div>
                  <h3>DETOX TONIC</h3>
                  <div>
                    <p>$3.50</p>
                    <button
                      className={`${ProductStyle.customBtn} ${ProductStyle.customBtnSecondaryProduct} mx-auto fw-bold`}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className="col-4 text-center gap-4 d-grid ">
                  <div
                    className={ProductStyle.imageContainer}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      className={`${ProductStyle.originalImage} ${
                        isHovered ? "hidden" : ""
                      }`}
                      src="https://juiceshop.com/cdn/shop/products/pineapple-1_800x.jpg?v=1672529953"
                      alt="Original"
                    />
                    <img
                      className={`${ProductStyle.hoverImage} ${
                        isHovered ? "" : "hidden"
                      }`}
                      src="https://juiceshop.com/cdn/shop/products/pineapple-2_800x.jpg?v=1672529961"
                      alt="Hover"
                    />
                  </div>
                  <h3>PINEAPPLE MINT TONIC</h3>
                  <div>
                    <p>$3.50</p>
                    <button
                      className={`${ProductStyle.customBtn} ${ProductStyle.customBtnSecondaryProduct} mx-auto fw-bold`}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className="col-4 text-center gap-4 d-grid ">
                  <div
                    className={ProductStyle.imageContainer}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      className={`${ProductStyle.originalImage} ${
                        isHovered ? "hidden" : ""
                      }`}
                      src="https://juiceshop.com/cdn/shop/products/Elderberry-update-1_800x.jpg?v=1680660808"
                      alt="Original"
                    />
                    <img
                      className={`${ProductStyle.hoverImage} ${
                        isHovered ? "" : "hidden"
                      }`}
                      src="https://juiceshop.com/cdn/shop/products/Elderberry-update-2_800x.jpg?v=1680660808"
                      alt="Hover"
                    />
                  </div>
                  <h3>ELDERBERRY TONIC</h3>
                  <div>
                    <p>$3.50</p>
                    <button
                      className={`${ProductStyle.customBtn} ${ProductStyle.customBtnSecondaryProduct} mx-auto fw-bold`}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Product;
