import axios from "axios";
import { useEffect, useState } from "react";
import SlideImagesHome from "../components/SlideImagesHome";
import Footer from "../components/Footer";

import Glide from "../components/Glide";
import CategorySectionHome from "../components/CategorySectionHome";

function Home({ hovered }) {
  const [products, setProducts] = useState(null);

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
        <div className={hovered ? "bg-dark-hover-nav" : ""}>
          <SlideImagesHome hovered={hovered} />
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
