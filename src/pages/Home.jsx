import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SlideImagesHome from "../components/SlideImagesHome";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import Footer from "../components/Footer";

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
        <div>
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
            <SlideImagesHome hovered={hovered} />
            <div>Home</div>
            <div>
              {products.map((product) => (
                <div key={product._id}>{product._id}</div>
              ))}
            </div>
            <div className="container">
              <Glider
                className="glider-perspective"
                hasArrows
                slidesToShow={3}
                slidesToScroll={1}
                iconLeft={<i className="bi bi-arrow-left-circle-fill"></i>}
                iconRight={<i className="bi bi-arrow-right-circle-fill"></i>}
              >
                {products
                  .filter((product) => product.bestSeller === true)
                  .map((product) => (
                    <div key={product._id} className="slide-outer">
                      <span>
                        <img className="mb-5" src={product.image} alt="" />
                      </span>
                    </div>
                  ))}
              </Glider>
            </div>
            <Footer />
          </div>
        </div>
      </>
    )
  );
}

export default Home;
