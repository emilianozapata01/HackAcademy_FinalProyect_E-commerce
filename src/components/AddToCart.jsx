import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useState } from "react";

function AddToCart({ product, qty, classBtn, typeQty }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(qty);

  const handleCart = () => {
    dispatch(
      addToCart({ item: product, qty: qty, total: qty * product.price })
    );
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
    if (value -1 !== 0) {
      dispatch(
        addToCart({
          item: product,
          qty: value - qty - 1,
          total: value * product.price,
          oneQty: false,
        })
      );
    }
  };

  const increaseValue = () => {
    setValue(value + 1);
    dispatch(
      addToCart({
        item: product,
        qty: value - qty + 1,
        total: value * product.price,
        oneQty: false,
      })
    );
  };

  return (
    <>
      {typeQty ? (
        <div className="input-group ">
          <button className="btn btn-success" onClick={decreaseValue}>
            <i className="bi bi-dash text-white"></i>
          </button>
          <input className="text-center inputCart " type="text" value={value} />
          <button className="btn btn-success" onClick={increaseValue}>
            <i className="bi bi-plus-lg text-white"></i>
          </button>
        </div>
      ) : (
        <button onClick={handleCart} className={classBtn}>
          ADD TO CART
        </button>
      )}
    </>
  );
}

export default AddToCart;
