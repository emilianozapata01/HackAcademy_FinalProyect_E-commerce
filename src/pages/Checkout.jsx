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
import TextField from '@mui/material/TextField';

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
                  <TextField id="outlined-basic" label="Email" variant="outlined" />
                </div>
              </form>
              <h4 className="mb-3">Payment</h4>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small className="text-body-secondary">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="spanning table">
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
                            <p className="d-inline ">
                              {Number(product.qty) * Number(product.item.price)}
                            </p>
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
                    <TableCell align="right">${cart.subtotal}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
