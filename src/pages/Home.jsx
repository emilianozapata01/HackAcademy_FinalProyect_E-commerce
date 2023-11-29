import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SlideImagesHome from "../components/SlideImagesHome";
import Footer from "../components/Footer";

import Glide from "../components/Glide";
import CategorySectionHome from "../components/CategorySectionHome";

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
            <CategorySectionHome />
          </div>
          <Footer />
        </div>
      </>
    )
  );
}

export default Home;
