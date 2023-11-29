import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SlideImagesHome from "../components/SlideImagesHome";
import Footer from "../components/Footer";
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
          <SlideImagesHome hovered={hovered} />
          <div>Home</div>
          <div>
            {products.map((product) => (
              <div key={product._id}>{product._id}</div>
            ))}
          </div>
          <div className="container">
          <Glide  products={products}/></div>
        </div>
        <Footer />
      </div>
    )
  );
}

export default Home;
