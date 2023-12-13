import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
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
import AddToCart from "../components/AddToCart";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";

function Cart({ hovered, setShowNavAndFooter }) {
  const buyer = useSelector((state) => state.buyer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    setShowNavAndFooter(true);
  }, []);

  const handleCheckout = () => {
    let messageElement = document.getElementById("p1");

    if (cart.cartItemCount === 0) {
      messageElement.textContent =
        "    YOU SHOULD ADD PRODUCTS TO YOUR CART TO CONTINUE   ";
    } else {
      if (buyer === null) {
        navigate("/login");
      } else {
        navigate("/checkout");
      }
    }
  };

  return (
    <>
      <div className={hovered ? "bg-dark-hover-nav " : ""}>
        <div className="container we">
          <h1 className="woolwich text-center mt-5 mb-5">My basket</h1>
          {cart.items[0] ? (
            <div>
              <TableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Products</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.items.map((product) => (
                      <TableRow key={product.item._id}>
                        <TableCell>
                          <div className="d-flex gap-5 align-items-center">
                            <img
                              className="cartImg"
                              src={product.item.image}
                              alt=""
                            />
                            <p>{product.item.name}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="d-flex align-items-center heightCart priceFix">
                            <p>${product.item.price}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="d-flex align-items-center heightCart">
                            <AddToCart
                              product={product.item}
                              qty={product.qty}
                              classBtn={
                                "custom-btn-swiper custom-btn-swiper-product"
                              }
                              typeQty={true}
                            />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="d-flex align-items-center heightCart  gap-5 ">
                            <div className="priceFix">
                              <p className="d-inline ">${product.total}</p>
                            </div>
                            <IconButton
                              onClick={() => dispatch(removeOfCart(product))}
                              className="text-danger"
                            >
                              <CancelIcon />
                            </IconButton>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell rowSpan={3} />
                      <TableCell colSpan={2}>Subtotal</TableCell>
                      <TableCell>${cart.subtotal}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="d-flex justify-content-end mt-4">
                <button
                 onClick={handleCheckout}
                  className="woolwich btn btn-dark ps-4 pe-4 fs-3 btnCheckout"
                >
                  checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="hei">
              <p id="p1" className="text-center mt-5 ">
                YOUR BASKET IS EMPTY.
              </p>
              <div className="d-flex justify-content-center ">
                <button
                  className="woolwich btn btn-dark fs-3 btnCheckout m-0  mt-5"
                  
                >
                  continue shopping
                </button>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
