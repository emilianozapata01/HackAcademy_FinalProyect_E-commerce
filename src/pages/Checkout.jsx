import { useSelector } from "react-redux";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { cleanCart } from "../redux/cartSlice";
import NavBarCheckout from "../components/NavbarCheckout";

function Checkout({ setShowNavAndFooter }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const buyer = useSelector((state) => state.buyer);
  const navigate = useNavigate();
  const email = useInput(buyer.email);
  const country = useInput("Uruguay");
  const firstname = useInput(buyer.firstname);
  const lastname = useInput(buyer.lastname);
  const address = useInput("P. Sherman, calle Wallaby 42");
  const apartment = useInput("101");
  const postalcode = useInput("11200");
  const city = useInput("Montevideo");
  const region = useInput("Montevideo");
  const phone = useInput("098989898");
  const nameoncard = useInput(`${buyer.firstname} ${buyer.lastname}`);
  const numbercard = useInput(123456789);
  const expiration = useInput("10/35");
  const cvv = useInput("777");

  React.useEffect(() => {
    setShowNavAndFooter(false);
  }, []);

  const handleNewOrder = async () => {
    console.log(cart);
    await axios({
      method: "POST",
      url: `${import.meta.env.VITE_URL_BASE_API}/order`,
      data: { items: cart.items, buyer: buyer.id },
      headers: {
        Authorization: `Bearer ${buyer.token}`,
      },
    });
    navigate("/success");
    dispatch(cleanCart());
    console.log(items);
  };

  return (
    <>
      <NavBarCheckout />
      <div className="container">
        <h1>Checkout</h1>
        <div className="d-flex gap-3">
          <div className="d-flex flex-column ">
            <span>Express checkout</span>
            <div className="d-flex justify-content-center gap-4">
              <button className="btn botonColor">
                {" "}
                <img
                  className="imgBtnLogo"
                  src="580b57fcd9996e24bc43c530.png"
                  alt=""
                  onClick={() => {
                    handleNewOrder();
                  }}
                />
              </button>
              <button className="btn btnColorViolet">
                <img
                  className="imgBtnLogo"
                  src="Shop_Pay-OQng0KpC7_brandlogos.net.svg"
                  alt=""
                />
              </button>
              <button
                className="btn 
              btnColorBlack"
              >
                <img
                  className="imgBtnLogo"
                  src="60e7f964711cf700048b6a6a.png"
                  alt=""
                />
              </button>
            </div>
            <div className="d-flex gap-3">
              <div className="w-75">
                <hr />
              </div>
              <div>
                <span>OR</span>
              </div>
              <div className="w-75">
                <hr />
              </div>
            </div>
            <div>
              <form action="#">
                <div>
                  <p>Contact</p>
                  <TextField
                    className="w-100"
                    id="email"
                    label="Email"
                    variant="outlined"
                    {...email}
                  />
                </div>
                <div>
                  <p>Delivery</p>
                  <div className="d-flex flex-column gap-3">
                    <div>
                      <TextField
                        className="w-100"
                        id="country"
                        label="Country/Region"
                        variant="outlined"
                        {...country}
                      />
                    </div>
                    <div className="d-flex gap-3">
                      <TextField
                        className="w-50"
                        id="firstname"
                        label="First name"
                        variant="outlined"
                        {...firstname}
                      />
                      <TextField
                        className="w-50"
                        id="lastname"
                        label="Last name"
                        variant="outlined"
                        {...lastname}
                      />
                    </div>
                    <div>
                      <TextField
                        className="w-100"
                        id="address"
                        label="Address"
                        variant="outlined"
                        {...address}
                      />
                    </div>
                    <div>
                      <TextField
                        className="w-100"
                        id="apartment"
                        label="Apartment, suite, etc. (optional)
                        "
                        variant="outlined"
                        {...apartment}
                      />
                    </div>
                    <div className="d-flex gap-3">
                      <TextField
                        className="w-100"
                        id="postalcode"
                        label="Postal code"
                        variant="outlined"
                        {...postalcode}
                      />
                      <TextField
                        className="w-100"
                        id="city"
                        label="City"
                        variant="outlined"
                        {...city}
                      />
                      <TextField
                        className="w-100"
                        id="region"
                        label="Region"
                        variant="outlined"
                        {...region}
                      />
                    </div>
                    <div>
                      <TextField
                        className="w-100"
                        id="phone"
                        label="Phone"
                        variant="outlined"
                        {...phone}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <h4 className="mb-3">Payment</h4>

              <div className="d-flex flex-column gap-3">
                <div>
                  <TextField
                    className="w-100"
                    id="cc-name"
                    label="Name on card"
                    variant="outlined"
                    {...nameoncard}
                    required
                  />
                  <small className="text-body-secondary">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div>
                  <TextField
                    className="w-100"
                    id="cc-number"
                    label="Number card"
                    variant="outlined"
                    {...numbercard}
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
                <div className="d-flex  gap-3">
                  <div className="w-100">
                    <TextField
                      className="w-100"
                      id="cc-expiration"
                      label="Expiration"
                      variant="outlined"
                      {...expiration}
                      required
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="w-100">
                    <TextField
                      className="w-100"
                      id="cc-cvv"
                      label="CVV"
                      variant="outlined"
                      {...cvv}
                      required
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn btn-danger my-4"
              onClick={() => {
                navigate("/success");
                handleNewOrder();
              }}
            >
              Pay now
            </button>
          </div>
          <div className="contenedor-externo">
            <div className="contenedor-interno">
              <TableContainer>
                <Table sx={{ minWidth: 700 }} arial-label="spanning table">
                  <TableBody>
                    {cart.items.map((product) => (
                      <TableRow key={product.item._id}>
                        <TableCell>
                          <div className="d-flex gap-5 align-items-center position-relative">
                            <img
                              className="cartImg"
                              src={product.item.image}
                              alt={product.item.name}
                            />
                            <i className="bi bi-heart-fill hearthIcon"></i>
                            <p className="hearthText">{Number(product.qty)}</p>
                            <p>{product.item.name}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="d-flex flex-column align-items-center  priceFix">
                            <p>Price</p>
                            <p>${product.item.price}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="d-flex flex-column align-items-center  priceFix">
                            <p>Total</p>
                            <p className="d-inline ">
                              $
                              {Number(product.qty) * Number(product.item.price)}
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell rowSpan={3} />
                      <TableCell colSpan={1}>Subtotal</TableCell>
                      <TableCell align="right">${cart.subtotal}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
