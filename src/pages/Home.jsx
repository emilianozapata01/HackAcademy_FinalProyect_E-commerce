import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SlideImagesHome from "../components/SlideImagesHome";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { useRef } from "react";
import Footer from "../components/Footer";

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
          <Glider
            className="glider-container"
            slidesToShow={1}
            iconLeft
            iconRight
            arrows
          >
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
          </Glider>
        </div>
        <Footer />
      </div>
    )
  );
}

export default Home;
