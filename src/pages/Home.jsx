import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
// import Glide from "@glidejs/glide";

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
    // new Glide(".glide").mount();
  }, []);
  return (
    products && (
      <>
        <Navbar setHovered={setHovered} />
        <div style={hovered ? { backdropFilter: "brightness(50%)" } : {}}>
          <div>Home</div>
          <div>
            {products.map((product) => (
              <div key={product._id}>{product._id}</div>
            ))}
          </div>
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">0</li>
                <li className="glide__slide">1</li>
                <li className="glide__slide">2</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Home;
