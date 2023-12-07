import { useSelector } from "react-redux";
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
import TextField from "@mui/material/TextField";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className="container">
        <h1>Checkout</h1>
        <div className="d-flex gap-3">
          <div className="d-flex flex-column ">
            <span>Express checkout</span>
            <div className="d-flex gap-3">
              <button className="btn btn-primary">shopPay</button>
              <button className="btn btn-danger">PayPal</button>
              <button className="btn btn-success">GPay</button>
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
                      />
                    </div>
                    <div className="d-flex gap-3">
                      <TextField
                        className="w-50"
                        id="firstname"
                        label="First name"
                        variant="outlined"
                      />
                      <TextField
                        className="w-50"
                        id="lastname"
                        label="Last name"
                        variant="outlined"
                      />
                    </div>
                    <div>
                      <TextField
                        className="w-100"
                        id="address"
                        label="Address"
                        variant="outlined"
                      />
                    </div>
                    <div>
                      <TextField
                        className="w-100"
                        id="apartment"
                        label="Apartment, suite, etc. (optional)
                        "
                        variant="outlined"
                      />
                    </div>
                    <div className="d-flex gap-3">
                      <TextField
                        className="w-25"
                        id="postalcode"
                        label="Postal code"
                        variant="outlined"
                      />
                      <TextField
                        className="w-25"
                        id="city"
                        label="City"
                        variant="outlined"
                      />
                      <TextField
                        className="w-25"
                        id="region"
                        label="Region"
                        variant="outlined"
                      />
                    </div>
                    <div>
                      <TextField
                        className="w-100"
                        id="phone"
                        label="Phone"
                        variant="outlined"
                      />
                    </div>
                  </div>
                </div>
              </form>
              <h4 className="mb-3">Payment</h4>

              <div className="row gy-3">
                <div>
                  <TextField
                    className="w-100"
                    id="cc-name"
                    label="Name on card"
                    variant="outlined"
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
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div>
                    <TextField
                      className="w-100"
                      id="cc-expiration"
                      label="Expiration"
                      variant="outlined"
                      required
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div>
                    <TextField
                      className="w-100"
                      id="cc-cvv"
                      label="CVV"
                      variant="outlined"
                      required
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
