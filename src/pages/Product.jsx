import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductStyle from "../styles/views/Product.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import AddToCart from "../components/AddToCart";

function Product({ hovered, setShowNavAndFooter }) {
  // setShowNavAndFooter(true);

  const params = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    // Después de 1 segundo, vuelve a establecer isClicked en false
    setTimeout(() => {
      setIsClicked(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_URL_BASE_API}/product`,
        });
        console.log("API Response:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      console.log("Products totales:", products);
      let updatedRandomProduct = [];

      while (updatedRandomProduct.length < 3) {
        const random = Math.floor(Math.random() * products.length);
        const selectedProduct = products[random];

        // Verifica si el producto no está ya en updatedRandomProduct
        if (
          !updatedRandomProduct.some(
            (product) => product._id === selectedProduct._id
          )
        ) {
          updatedRandomProduct.push(selectedProduct);
          console.log("Producto aleatorio añadido:", selectedProduct);
        }
      }

      setRandomProducts(updatedRandomProduct);
    }
  }, [products]);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_BASE_API}/product/${params.id}`
      );

      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  useEffect(() => {
    setShowNavAndFooter(true);
    getProduct();
  }, [params.id]);

  const [value, setValue] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const increaseValue = () => {
    setValue(value + 1);
  };

  return (
    <>
      {product && (
        <div
          key={product._id}
          className={`promo ${hovered ? "bg-dark-hover-nav " : ""}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="col-12 fw-bold ps-5 mt-5">
                  <Link className="text-decoration-none text-dark" to={"/"}>
                    <span> Home </span>
                  </Link>
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                  <Link className="text-decoration-none text-dark" to={"/"}>
                    <span> All </span>
                  </Link>
                  <span>
                    <i className="bi bi-arrow-right"></i> TURMERIC GINGER TONIC
                  </span>
                </div>

                <Carousel
                  nextIcon={
                    <span className={ProductStyle.customCarouselIcon}>
                      <i className="bi bi-caret-right"></i>
                    </span>
                  }
                  prevIcon={
                    <span className={ProductStyle.customCarouselIcon}>
                      <i className="bi bi-caret-left"></i>
                    </span>
                  }
                >
                  <Carousel.Item interval={1000}>
                    <img
                      className="img-fluid"
                      src={product.image}
                      alt="TURMERIC GINGER TONIC"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <img
                      className="img-fluid"
                      src={product.image}
                      alt="TURMERIC GINGER TONIC"
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-6  mt-5">
                <p className={`woolwich ${ProductStyle.fontTitleSize}`}>
                  {product.name}
                </p>
                <p className={`woolwich ${ProductStyle.fontPriceSize} mb-5`}>
                  ${product.price}
                </p>
                <p className={`mb-5 ${ProductStyle.fontProduct}`}>
                  {product.description}
                </p>

                <div>
                  <button
                    className={`mb-5 ${ProductStyle.buttonSize}`}
                    onClick={decreaseValue}
                    disabled={value === 1}
                  >
                    -
                  </button>

                  <input
                    className={`text-center ${ProductStyle.inputSize}`}
                    type="number"
                    value={value}
                    readOnly
                  />
                  <button
                    className={ProductStyle.buttonSize}
                    onClick={increaseValue}
                  >
                    +
                  </button>
                </div>
                <AddToCart
                  product={product}
                  qty={value}
                  classBtn={`woolwich mb-3 ${ProductStyle.customBtn} ${ProductStyle.customBtnPrimeProduct}`}
                />

                <p className={ProductStyle.fontProduct}>
                  <strong>Ingredients: </strong> {product.ingredients}
                </p>
              </div>
              <div className="d-flex flex-row  justify-content-around mt-5 mb-5">
                <img
                  className={` ${ProductStyle.iconStyle}`}
                  src="/organic.png"
                  alt=""
                />
                <img
                  className={` ${ProductStyle.iconStyle}`}
                  src="/NON_GMO.png"
                  alt=""
                />
                <img
                  className={` ${ProductStyle.iconStyle}`}
                  src="/glutenFree.jpg"
                  alt=""
                />
                <img
                  className={` ${ProductStyle.iconStyle}`}
                  src="/friendly.jpg"
                  alt=""
                />
              </div>
              <div className="row mt-5  d-flex ">
                <h1 className="text-center woolwich">YOU MAY ALSO LIKE</h1>
                <div className="d-flex flex-row   ">
                  {randomProducts &&
                    randomProducts.map((productRandom) => (
                      <div
                        key={productRandom._id}
                        className="d-flex justify-content-center col-4 text-center d-grid"
                      >
                        <div className="align-self-baseline">
                          <Link
                            className={ProductStyle.a}
                            to={`/product/${productRandom._id}`}
                            key={productRandom._id}
                          >
                            <div
                              className={ProductStyle.imageContainer}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            >
                              <img
                                className={`${ProductStyle.originalImage} ${
                                  isClicked ? ProductStyle.shrink : ""
                                }`}
                                src={productRandom.image}
                                alt="Original"
                                onClick={handleClick}
                              />
                            </div>
                            <h3>{productRandom.name}</h3>
                            <p>${productRandom.price}</p>
                          </Link>
                          <div>
                            <button
                              className={`${ProductStyle.customBtn} ${ProductStyle.customBtnSecondaryProduct} mx-auto fw-bold`}
                            >
                              ADD TO CART
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Product;
