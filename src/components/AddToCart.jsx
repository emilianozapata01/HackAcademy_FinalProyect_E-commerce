import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function AddToCart({ product, qty }) {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addToCart({item: product, qty: qty}));
  };

  return (
    <>
      <button
        onClick={handleCart}
        className="custom-btn-swiper custom-btn-swiper-product"
      >
        ADD TO CART
      </button>
    </>
  );
}

export default AddToCart;
