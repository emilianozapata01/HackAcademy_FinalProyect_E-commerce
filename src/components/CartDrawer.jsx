import React from "react";
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
import { useSelector } from "react-redux";

function CartDrawer() {
  const products = useSelector((state) => state.cart);
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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 420 }}
      role="presentation"
    >
      <div>
        <div className="p-4 d-flex">
          <h1 className="woolwich ">My basket</h1>
          <div className="closeBtn">
            <IconButton
              onClick={toggleDrawer(anchor, false)}
              className="text-black"
            >
              <CancelIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </div>
        </div>
        <List>
          {products.map((product) => (
            <List key={product._id}>
              <ListItem>
                <div className="d-flex align-items-start ">
                  <img className="w-25" src={product.image} alt="" />
                  <div className="d-flex flex-column ms-3">
                    <p className="fw-bold m-0">{product.name}</p>
                    <small className="fs-6"></small>
                  </div>
                  <IconButton className="text-danger">
                    <CancelIcon />
                  </IconButton>
                </div>
                ';'
              </ListItem>
              <ListItem>
                <div className="fw-bold w-100 d-flex justify-content-center">
                  <p className="woolwich">${product.price}</p>
                  <p className="ms-5">QTY:</p>
                  <input
                    type="number"
                    className=" form-control w-25 h-25"
                  ></input>
                </div>
              </ListItem>
            </List>
          ))}
        </List>
        <Divider />
        <div className=" cartSub ">
          <div className="subTotal">
            <p className="text-white">Subtotal</p>
            <p className="text-white">$12.00</p>
          </div>
          <p className="text-white fs-6 ps-3 se-3">
            TAX INCLUDED AND SHIPPING CALCULATED AT CHECKOUT. YOU CAN ALSO APPLY
            ANY DISCOUNT CODES YOU HAVE AT CHECKOUT.{" "}
          </p>
          <div className="divCheckout">
            <button className="woolwich btn btn-dark ps-4 pe-4 fs-3 btnCheckout">
              checkout
            </button>
          </div>
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
              <ShoppingCartIcon className={NavbarStyle.navIcons} />{" "}
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
