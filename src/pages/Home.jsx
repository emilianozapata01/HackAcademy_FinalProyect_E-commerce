import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SlideImagesHome from "../components/SlideImagesHome";
import HomeStyle from "../styles/views/Home.module.css";
import { useRef } from "react";
import Footer from "../components/Footer";
import React from "react";
import { Link } from "react-router-dom";

import Glide from "../components/Glide";

function Home() {
  const [products, setProducts] = useState(null);
  const [hovered, setHovered] = useState(false);

  const getProducts = async () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_URL_BASE_API}/products`,
    }).then((r) => setProducts(r.data));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    products && (
      <>
        <Navbar setHovered={setHovered} />
        <div className={hovered ? "bg-dark-hover-nav" : ""}>
          <SlideImagesHome hovered={hovered} />
          <div className="container">
            <div>
              <Glide products={products} />
            </div>
          </div>
          <div className={HomeStyle.containerSize}>
            <div className={`row ${HomeStyle.widthRow}`}>
              <h1
                className={`text-center text-dark ${HomeStyle.ourProductTitle} mb-5`}
              >
                OUR PRODUCTS
              </h1>

              <div className={`col-6 ${HomeStyle.categoryBoxSize}`}>
                <Link to="/sparkling-juice">
                  <img
                    className={HomeStyle.categoryBoxSizeCAN}
                    src="can.png"
                    alt="Sparkling Juice"
                  />
                  <button className={HomeStyle.buttonCategoriesSparkling}>
                    SPARKLING TONICS
                  </button>
                </Link>
              </div>
              <div className={`col-6 ${HomeStyle.categoryBoxSize}`}>
                <Link to="/juices">
                  <img
                    className={HomeStyle.categoryBoxSizePROTEIN}
                    src="proteina.PNG"
                    alt="NUT MILKS & SMOOTHIES"
                  />
                  <button className={HomeStyle.buttonCategoriesNutMilks}>
                    NUT MILKS & SMOOTHIES
                  </button>
                </Link>
              </div>
              <div className={`col-6 ${HomeStyle.categoryBoxSize}`}>
                <Link to="/nut-milks&smoothies">
                  <img
                    className={HomeStyle.categoryBoxSizeJUICE}
                    src="juices.PNG"
                    alt="juices"
                  />
                  <button className={HomeStyle.buttonCategories}>JUICES</button>
                </Link>
              </div>

              <div className={`col-6 ${HomeStyle.categoryBoxSize}`}>
                <Link to="elixirs">
                  <img
                    className={`${HomeStyle.categoryBoxSizeELIXIR}`}
                    src="elixir0.png"
                    alt="Elixir"
                  />
                </Link>
                <button className={HomeStyle.buttonCategories}>ELIXIRS</button>
              </div>
              <div className="text-center mt-5">
                <Link to="/all-products">
                  <button className={HomeStyle.shopAllButton}>SHOP ALL</button>
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    )
  );
}

export default Home;
