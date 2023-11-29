// import axios from "axios";
// import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductStyle from "../styles/views/Product.module.css";
import React, { useState } from "react";

function Product() {
  const [value, setValue] = useState(1);
  const [hovered, setHovered] = useState(false);
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

  return (
    <>
      <Navbar setHovered={setHovered} />
      <div className={hovered ? "bg-dark-hover-nav " : ""}>
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
                    <i class="bi bi-caret-right"></i>
                  </span>
                } // Símbolo para la flecha siguiente
                prevIcon={
                  <span className={ProductStyle.customCarouselIcon}>
                    <i class="bi bi-caret-left"></i>
                  </span>
                } // Símbolo para la flecha anterior
              >
                <Carousel.Item interval={20000}>
                  <img
                    className="img-fluid"
                    src="https://juiceshop.com/cdn/shop/products/tumeric-1_1200x.jpg?v=1672529908"
                    alt="TURMERIC GINGER TONIC"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="img-fluid"
                    src="https://juiceshop.com/cdn/shop/products/tumeric-2_1200x.jpg?v=1672529914"
                    alt="TURMERIC GINGER TONIC"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            {/* //////////////////////////////////////////////////////////////// */}

            <div className="text-center gap-4 d-grid d-flex flex-column  ">
              <div
                className={`${ProductStyle.imageContainer}  `}
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
              <h5>PINEAPPLE MINT TONIC</h5>
              <div>
                <p>$3.50</p>
                <button
                  className={`${ProductStyle.customBtn} ${ProductStyle.customBtnSecondaryProduct} mx-auto fw-bold`}
                ></button>
                <circle cx="8" cy="8" r="8" />
                Non-GMO
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
                  Sparkling Mountain Spring Water, Cold-Pressed Juice,*
                  Cold-Pressed Ginger Juice,* Cold-Pressed Turmeric Juice,*
                  Coconut Nectar,* Ashwagandha,* Cayenne Pepper,* Black Pepper*
                </p>
                <p className={ProductStyle.fontProduct}>
                  *Certified Organic Ingredients
                </p>
              </div>

              <div className=" text-center gap-4 d-grid d-flex flex-column ">
                <div
                  className={`${ProductStyle.imageContainer} `}
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
                <h5>ELDERBERRY TONIC</h5>
                <div>
                  <p>$3.50</p>
                  <button
                    className={`${ProductStyle.customBtn} ${ProductStyle.customBtnSecondaryProduct} mx-auto fw-bold`}
                  ></button>
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
                <h5>DETOX TONIC</h5>
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
                <h5>PINEAPPLE MINT TONIC</h5>
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
                <h5>ELDERBERRY TONIC</h5>
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
    </>
  );
}

export default Product;
