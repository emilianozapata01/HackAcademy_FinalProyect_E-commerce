import axios from "axios";
import { useEffect } from "react";
import Footer from "../components/Footer";
import HomeStyle from "../styles/views/Home.module.css";
import Glide from "../components/Glide";
import CategorySectionHome from "../components/CategorySectionHome";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productsSlice";
import { Link } from "react-router-dom";
import ButtonUp from "../components/ButtonUp";
import SwiperHome from "../components/SwiperHome";
function Home({ hovered, setShowNavAndFooter }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);

  useEffect(() => {
    setShowNavAndFooter(true);
    const getProducts = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_URL_BASE_API}/product`,
        });
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      {" "}
      {product != null && product.length != 0 ? (
        <div>
          <ButtonUp />
          <div>
            {product && (
              <Link to="/about-this-proyect">
                <button
                  className={`${HomeStyle.aboutProject} ${HomeStyle.aboutProjectBig}`}
                >
                  About this Project
                </button>
                <button className={` ${HomeStyle.aboutProjectSmall}`}>
                  <i className="bi bi-person-raised-hand"></i>
                </button>
              </Link>
            )}
            <div className={hovered ? "bg-dark-hover-nav" : ""}>
              <div>
                <SwiperHome />
              </div>
              <div className="d-flex flex-wrap justify-content-center pt-5 pb-5 gap-5">
                <div className="d-flex flex-nowrap gap-5">
                  <img className="imgBan" src="downBanner1.png" alt="" />
                  <img className="imgBan" src="downBanner2.png" alt="" />
                </div>
                <div className="d-flex flex-nowrap gap-5">
                  <img className="imgBan" src="downBanner4.avif" alt="" />
                  <img className="imgBan" src="downBanner3.png" alt="" />
                </div>
              </div>
              <div className="container">
                <Glide products={product} qty={1} />
              </div>

              <CategorySectionHome />
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        <div
          className="w-100 d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <span className="loader"></span>
        </div>
      )}
      ;
    </>
  );
}

export default Home;
