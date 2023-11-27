import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Home() {
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
        <Navbar />
        <div>Home</div>
        <div>
          {products.map((product) => (
            <div key={product._id}>{product._id}</div>
          ))}
        </div>
      </>
    )
  );
}

export default Home;
