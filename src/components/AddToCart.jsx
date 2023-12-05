import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function AddToCart({ product, qty, classBtn }) {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addToCart({ item: product, qty: qty }));
  };

  return (
    <>
      <button onClick={handleCart} className={`${classBtn} buyerButton`}>
        ADD TO CART
      </button>
    </>
  );
}

export default AddToCart;
