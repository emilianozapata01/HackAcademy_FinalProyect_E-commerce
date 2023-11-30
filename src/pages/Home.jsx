import axios from "axios";
import { useEffect, useState } from "react";
import SlideImagesHome from "../components/SlideImagesHome";
import SlideImagesHomeResponsive from "../components/SlideImageHomeResponsive";
import Footer from "../components/Footer";
import HomeStyle from "../styles/views/Home.module.css";
import Glide from "../components/Glide";
import CategorySectionHome from "../components/CategorySectionHome";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productsSlice";
import { Link } from "react-router-dom";
function Home({ hovered }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_URL_BASE_API}/products`,
        });
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    product && (
      <>
        <Link to="/about-us">
          <button
            className={`${HomeStyle.aboutProject} ${HomeStyle.aboutProjectBig}`}
          >
            About this Project
          </button>
        </Link>
        <button
          className={`${HomeStyle.aboutProject} ${HomeStyle.aboutProjectSmall}`}
        >
          <i className="bi bi-person-raised-hand"></i>
        </button>

        <div className={hovered ? "bg-dark-hover-nav" : ""}>
          <div className={`${HomeStyle.SlideImageHome}`}>
            <SlideImagesHome hovered={hovered} />
          </div>
          <div className={`${HomeStyle.SlideImageHomeResponsive}`}>
            <SlideImagesHomeResponsive hovered={hovered} />
          </div>
          <div className="d-flex flex-nowrap justify-content-center mt-5">
            <div className="ms-5 me-5">
              <img className="imgBan" src="bottledInG_100x.png" alt="" />
            </div>
            <div className="ms-5 me-5">
              <img className="imgBan" src="madeInSF_100x.png" alt="" />
            </div>
            <div className="ms-5 me-5">
              <img
                className="imgBan"
                src="pressedFreshDaily_92ffb9fd-2eac-4ef5-a677-f1e231c06ac3_100x.png"
                alt=""
              />
            </div>
            <div className="ms-5 me-5">
              <img className="imgBan" src="rawOrganic_100x.png" alt="" />
            </div>
          </div>
          <div className="container">
            <div>
              <Glide products={product} />
            </div>
            <CategorySectionHome />
          </div>
          <Footer />
        </div>
      </>
    )
  );
}

export default Home;
