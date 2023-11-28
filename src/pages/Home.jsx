import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SlideImagesHome from "../components/SlideImagesHome";
import HomeStyle from "../styles/views/Home.module.css";
import { useRef } from "react";
import Footer from "../components/Footer";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState(null);
  const [hovered, setHovered] = useState(false);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

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
      <div style={{ height: "100vh" }}>
        <Navbar setHovered={setHovered} />
        <div
          style={
            hovered
              ? {
                  background: "rgba(0,0,0,0.6)",
                  opacity: "0.9",
                  transition: "0.3s",
                  height: "100%",
                }
              : {}
          }
        >
          <SlideImagesHome />
          <div>Home</div>
          <div>
            {products.map((product) => (
              <div key={product._id}>{product._id}</div>
            ))}
          </div>

          {products
            .filter((product) => product.bestSeller === true)
            .map((product) => (
              <div key={product._id}>
                {" "}
                <span>
                  <img className="w-25" src={product.image} alt="" />
                </span>
              </div>
            ))}
        </div>
        <div className={`container ${HomeStyle.containerSize}`}>
          <div className={`row ${HomeStyle.widthRow}`}>
            <h1
              className={`text-center text-dark ${HomeStyle.ourProductTitle} mb-5`}
            >
              OUR PRODUCTS
            </h1>
            <div className={`col-6  ${HomeStyle.categoryBoxSize}   `}>
              <Link to="/sparkling-juice">
                <img
                  className={`${HomeStyle.categoryBoxSizeCAN} `}
                  src="can.png"
                  alt="Sparkling Juice"
                />
                <button className={HomeStyle.buttonCategoriesSparkling}>
                  SPARKLING TONICS
                </button>
              </Link>
            </div>
            <div className={`col-6 ${HomeStyle.categoryBoxSize}   `}>
              <Link to="/juices">
                <img
                  className={`${HomeStyle.categoryBoxSizePROTEIN}   `}
                  src="proteina.PNG"
                  alt="NUT MILKS & SMOOTHIES"
                />
                <button className={HomeStyle.buttonCategoriesNutMilks}>
                  NUT MILKS & SMOOTHIES
                </button>
              </Link>
            </div>
            <div className={`col-6  ${HomeStyle.categoryBoxSize}   `}>
              <Link to="/nut-milks&smoothies">
                <img
                  className={`${HomeStyle.categoryBoxSizeJUICE}   `}
                  src="juices.PNG"
                  alt="juices"
                />
                <button className={HomeStyle.buttonCategories}>JUICES</button>
              </Link>
            </div>

            <div className={`col-6   ${HomeStyle.categoryBoxSize}   `}>
              <Link to="elixirs">
                <img
                  className={`${HomeStyle.categoryBoxSizeELIXIR}   `}
                  src="elixir0.png"
                  alt="Elixir"
                />
              </Link>
              <button className={HomeStyle.buttonCategories}>ELIXIRS</button>
            </div>

            <div className="text-center mt-5">
              <Link to="/all-products">
                {" "}
                <button className={HomeStyle.shopAllButton}>SHOP ALL</button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  );
}

export default Home;
