import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import NavbarStyle from "../styles/components/NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeOfCart } from "../redux/cartSlice";
import AddToCart from "../components/AddToCart";
import { useNavigate } from "react-router-dom";

function CartDrawer({ cartItemCount }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [subTotal, setSubTotal] = useState(0);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 420 }}
      role="presentation"
    >
      <div className={`${NavbarStyle.cartContainer}`}>
        <div>
          <div className="p-4 d-flex">
            <h1 className="woolwich">My basket</h1>
            <div className="closeBtn">
              <IconButton
                onClick={toggleDrawer(anchor, false)}
                className="text-black"
              >
                <CancelIcon sx={{ fontSize: 50 }} />
              </IconButton>
            </div>
          </div>
          {cart.items[0] ? (
            <div className="listCart">
              <List>
                {cart.items.map((product) => (
                  <ListItem key={product.item._id}>
                    <div className="d-flex align-items-start ">
                      <img className="w-25" src={product.item.image} alt="" />
                      <div className="d-flex flex-column ms-3">
                        <p className="fw-bold m-0">{product.item.name}</p>
                        <small className="fs-6">
                          {product.item.category.name}
                        </small>
                        <div className="fw-bold w-100 d-flex ">
                          <p className="woolwich priceFix">${product.total}</p>
                          <div className="heightDrawerInput">
                            <AddToCart
                              product={product.item}
                              qty={product.qty}
                              classBtn={
                                "custom-btn-swiper custom-btn-swiper-product"
                              }
                              typeQty={true}
                            />
                          </div>
                        </div>
                      </div>
                      <IconButton
                        onClick={() => dispatch(removeOfCart(product))}
                        className="text-danger"
                      >
                        <CancelIcon />
                      </IconButton>
                    </div>
                  </ListItem>
                ))}
              </List>
            </div>
          ) : (
            <div>
              <p className="text-center mt-5">YOUR BASKET IS EMPTY.</p>
            </div>
          )}

          <Divider />
          <List>
            <div className=" cartSub ">
              <div className="subTotal">
                <p className="text-white">Subtotal</p>
                <p className="text-white">${cart.subtotal}</p>
              </div>
              <p className="text-white fs-6 ps-3 se-3">
                TAX INCLUDED AND SHIPPING CALCULATED AT CHECKOUT. YOU CAN ALSO
                APPLY ANY DISCOUNT CODES YOU HAVE AT CHECKOUT.{" "}
              </p>
              <div className="divCheckout">
                <button
                  onClick={handleCheckout}
                  className="woolwich btn btn-dark ps-4 pe-4 fs-3 btnCheckout"
                >
                  checkout
                </button>
              </div>
            </div>
          </List>
        </div>
      </div>
    </Box>
  );

  return (
    <>
      <div>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              {" "}
              <ShoppingCartIcon className={NavbarStyle.navIcons} />
              {cartItemCount > 0 && (
                <span className={NavbarStyle.cartItemCount}>
                  {cartItemCount}
                </span>
              )}
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default CartDrawer;
