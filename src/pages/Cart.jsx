import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeOfCart, addToCart } from "../redux/cartSlice";
import Footer from "../components/Footer";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddToCart from "../components/AddToCart";

function Cart({ hovered, setShowNavAndFooter }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    setShowNavAndFooter(true);
  }, []);
  const [value, setValue] = useState(1);
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
      <div className={hovered ? "bg-dark-hover-nav " : ""}>
        <div className="container ">
          <h1 className="woolwich text-center mt-5 mb-5">My basket</h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="">Products</TableCell>
                  <TableCell align="">Price</TableCell>
                  <TableCell align="">Quantity</TableCell>
                  <TableCell align="">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.items.map((product) => (
                  <TableRow key={product.item._id}>
                    <TableCell align="">
                      <div className="d-flex gap-5 align-items-center">
                        <img
                          className="cartImg"
                          src={product.item.image}
                          alt=""
                        />
                        <p>{product.item.name}</p>
                      </div>
                    </TableCell>
                    <TableCell align="">
                      <div className="d-flex align-items-center heightCart">
                        <p>${product.item.price}</p>
                      </div>
                    </TableCell>
                    <TableCell align="">
                      <div className="d-flex align-items-center heightCart">
                        {/* <div className="input-group ">
                          <button
                            className="btn btn-success"
                            onClick={decreaseValue}
                          >
                            <i className="bi bi-dash text-white"></i>
                          </button>
                          <input
                            className="text-center inputCart "
                            type="text"
                            value={product.qty}
                          />
                          <button
                            className="btn btn-success"
                            onClick={increaseValue}
                          >
                            <i className="bi bi-plus-lg text-white"></i>
                          </button>
                        </div> */}
                        <AddToCart product={product.item} qty={product.qty} classBtn={"custom-btn-swiper custom-btn-swiper-product"} typeQty={true} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="d-flex align-items-center heightCart">
                      <div className="w-25">
                        <p className="d-inline ">
                          {Number(product.qty) * Number(product.item.price)}
                        </p></div>
                        <Link
                          className="text-decoration-none text-danger ms-5"
                          to={""}
                        >
                          <i className="bi bi-x-circle-fill"></i>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">${cart.subtotal}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
