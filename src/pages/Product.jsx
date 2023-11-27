// import axios from "axios";
// import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";
import "../App.css";
import React, { useState } from "react";

function Product() {
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

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 fw-bold ">
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
            <Carousel>
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
          <div className="col-6 d-grid gap-1 ">
            <h4>TURMERIC GINGER TONIC</h4>
            <span className="font-product">$3.50</span>
            <p className="font-product">
              Turmeric Ginger Tonic is made with pure mountain spring water,
              cold-pressed juice, and adaptogens, to reduce stress and
              inflammation.
            </p>
            <span className="font-product">Size:12oZ</span>
            <p className="font-product">
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
            <p className="font-product">
              *These statements have not been evaluated by the FDA. This product
              is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <div>
              <button
                className="button-size"
                onClick={decreaseValue}
                disabled={value === 1}
              >
                -
              </button>
              <input
                className="text-center input-size"
                type="number"
                value={value}
                readOnly
              />
              <button className="button-size" onClick={increaseValue}>
                +
              </button>
            </div>
            <button className="custom-btn custom-btn-prime-product">
              ADD TO CART
            </button>
            <p className="text-success font-product">
              Local pick up and delivery only. Order by 11am and we will have
              your order delivered in your desired pickup or delivery window.
            </p>
            <p className="font-product">
              Sparkling Mountain Spring Water, Cold-Pressed Juice,* Cold-Pressed
              Ginger Juice,* Cold-Pressed Turmeric Juice,* Coconut Nectar,*
              Ashwagandha,* Cayenne Pepper,* Black Pepper*
            </p>
            <p className="font-product">*Certified Organic Ingredients</p>
          </div>
          <div className="row">
            <h4 className="text-center">YOU MAY ALSO LIKE</h4>

            <div className="col-4 text-center gap-4 d-grid">
              <div
                className="image-container "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className={`original-image ${isHovered ? "hidden" : ""}`}
                  src="https://juiceshop.com/cdn/shop/products/detox-1_800x.jpg?v=1672529675"
                  alt="Original"
                />
                <img
                  className={`hover-image ${isHovered ? "" : "hidden"}`}
                  src="https://juiceshop.com/cdn/shop/products/detox-2_800x.jpg?v=1672529726"
                  alt="Hover"
                />
              </div>
              <h5>DETOX TONIC</h5>
              <div>
                <p>$3.50</p>
                <button className="custom-btn custom-btn-secondary-product mx-auto fw-bold">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="col-4 text-center gap-4 d-grid ">
              <div
                className="image-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className={`original-image ${isHovered ? "hidden" : ""}`}
                  src="https://juiceshop.com/cdn/shop/products/pineapple-1_800x.jpg?v=1672529953"
                  alt="Original"
                />
                <img
                  className={`hover-image ${isHovered ? "" : "hidden"}`}
                  src="https://juiceshop.com/cdn/shop/products/pineapple-2_800x.jpg?v=1672529961"
                  alt="Hover"
                />
              </div>
              <h5>PINEAPPLE MINT TONIC</h5>
              <div>
                <p>$3.50</p>
                <button className="custom-btn custom-btn-secondary-product mx-auto fw-bold">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="col-4 text-center gap-4 d-grid ">
              <div
                className="image-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className={`original-image ${isHovered ? "hidden" : ""}`}
                  src="https://juiceshop.com/cdn/shop/products/Elderberry-update-1_800x.jpg?v=1680660808"
                  alt="Original"
                />
                <img
                  className={`hover-image ${isHovered ? "" : "hidden"}`}
                  src="https://juiceshop.com/cdn/shop/products/Elderberry-update-2_800x.jpg?v=1680660808"
                  alt="Hover"
                />
              </div>
              <h5>ELDERBERRY TONIC</h5>
              <div>
                <p>$3.50</p>
                <button className="custom-btn custom-btn-secondary-product mx-auto fw-bold ">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
