// import axios from "axios";
// import { useEffect, useState } from "react";

import { Link } from "react-router-dom"; // Asegúrate de importar Link desde react-router-dom
import "../App.css";

function Product() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link className="text-decoration-none" to={"/"}>
              <span>Home</span>
            </Link>
            <span>
              <i className="bi bi-arrow-right"></i>
            </span>
            <Link className="text-decoration-none" to={"/"}>
              <span>All</span>
            </Link>
            <span>
              <i className="bi bi-arrow-right"></i> TURMERIC GINGER TONIC
            </span>
          </div>

          <div className="col-5">
            <img
              src="https://juiceshop.com/cdn/shop/products/tumeric-1_800x.jpg?v=1672529908"
              alt="TURMERIC GINGER TONIC"
            />
          </div>
          <div className="col-7">
            <h4>TURMERIC GINGER TONIC</h4>
            <span>$3.50</span>
            <p>
              Turmeric Ginger Tonic is made with pure mountain spring water,
              cold-pressed juice, and adaptogens, to reduce stress and
              inflammation.
            </p>
            <span>Size:12oZ</span>
            <p>
              Organic <i className="bi bi-circle-fill"></i> Non-GMO{" "}
              <i className="bi bi-circle-fill"></i> Gluten Free{" "}
              <i className="bi bi-circle-fill"></i> Vegan
            </p>
            <p>
              *These statements have not been evaluated by the FDA. This product
              is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <button className="custom-btn">ADD TO CART</button>
            <p className="text-success">
              Local pick up and delivery only. Order by 11am and we will have
              your order delivered in your desired pickup or delivery window.
            </p>
            <p>
              Sparkling Mountain Spring Water, Cold-Pressed Juice,* Cold-Pressed
              Ginger Juice,* Cold-Pressed Turmeric Juice,* Coconut Nectar,*
              Ashwagandha,* Cayenne Pepper,* Black Pepper*
            </p>
            <p>*Certified Organic Ingredients</p>
          </div>
          <div className="col-12">
            <h4 className="text-center">YOU MAY ALSO LIKE</h4>

            <div className="col-4">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/2565/1033/products/detox-1_600x.jpg?v=1672529675"
                alt=""
              />
              <h5>DETOX TONIC</h5>
              <span>$3.50</span>
              <button className="custom-btn">ADD TO CART</button>
            </div>

            <div className="col-4">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/2565/1033/products/pineapple-1_600x.jpg?v=1672529953"
                alt=""
              />
              <h5>PINEAPPLE MINT TONIC</h5>
              <span>$3.50</span>
              <button className="custom-btn">ADD TO CART</button>
            </div>
            <div className="col-4">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/2565/1033/products/Elderberry-update-1_600x.jpg?v=1680660808"
                alt=""
              />
              <h5>ELDERBERRY TONIC</h5>
              <span>$3.50</span>
              <button className="custom-btn">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
