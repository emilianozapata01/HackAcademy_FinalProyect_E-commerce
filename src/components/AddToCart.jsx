import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorizeRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
function AddToCart({ product, qty, classBtn, typeQty }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(qty);

  const handleCart = () => {
    let messageElement = document.getElementById("stock");

    if (product.stock <= 0) {
      messageElement.textContent = "    NO STOCK  ";
    } else {
      dispatch(
        addToCart({ item: product, qty: qty, total: qty * product.price })
      );

      toast.success("Product added to cart!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
    if (value - 1 !== 0) {
      const quanty1 = value - qty - 1;
      dispatch(
        addToCart({
          item: product,
          qty: quanty1,
          total: value * product.price,
        })
      );
    }
  };

  const increaseValue = () => {
    if (value < product.stock) setValue(value + 1);
    const quanty = value - qty + 1;
    dispatch(
      addToCart({
        item: product,
        qty: quanty,
        total: value * product.price,
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
          <input
            className="text-center inputCart "
            type="text"
            value={value}
            readOnly
          />
          <button className="btn btn-success" onClick={increaseValue}>
            <i className="bi bi-plus-lg text-white"></i>
          </button>
        </div>
      ) : (
        <button onClick={handleCart} className={classBtn}>
          <p id="stock" className="m-0 p-0">
            ADD TO CART
          </p>
        </button>
      )}
    </>
  );
}

export default AddToCart;
