import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Cart() {
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
    <div className="container">
      <h1 className="fw-bold">SHOPPING CART</h1>
      <Table >
        <thead>
          <tr>
            <th className="fw-bold" colSpan={2}>
              PRODUCTS
            </th>
            <th className="fw-bold">PRICE</th>
            <th className="fw-bold">QUANTITY</th>
            <th className="fw-bold">TOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <div className="row">
                <div className="col">
                  <img src="" alt="" />
                </div>
                <div className="col">
                  <p>Fall Punch</p>
                </div>
              </div>
            </td>
            <td>13.00</td>
            <td>
            <div >
              <button
                className="button-size"
                onClick={decreaseValue}
                disabled={value === 1}
              >
                -
              </button>
              <input
                className="text-center input-size "
                type="number"
                value={value}
                readOnly
              />
              <button className="button-size" onClick={increaseValue}>
                +
              </button>
            </div>
            </td>
            <td>13.00</td>
            <td><Link className="text-decoration-none text-danger" to={""}><i className="bi bi-x-circle-fill"></i></Link></td>
            
          </tr>
          <tr>
            <td colSpan={3}></td>
            <td>Subtotal</td>
            <td className="fw-bold">13.00</td>
            <td></td>
            
          </tr>
        </tbody>
      </Table>
      <h4 className="mb-3">Payment</h4>
      <div className="d-block my-3">
        <div className="custom-control custom-radio">
          <input
            id="credit"
            name="paymentMethod"
            type="radio"
            className="custom-control-input"
            checked=""
            required=""
          />
          <label className="custom-control-label">Credit card</label>
        </div>
        <div className="custom-control custom-radio">
          <input
            id="debit"
            name="paymentMethod"
            type="radio"
            className="custom-control-input"
            required=""
          />
          <label className="custom-control-label">Debit card</label>
        </div>
        <div className="custom-control custom-radio">
          <input
            id="paypal"
            name="paymentMethod"
            type="radio"
            className="custom-control-input"
            required=""
          />
          <label className="custom-control-label">PayPal</label>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Name on card</label>
          <input
            type="text"
            className="form-control"
            id="cc-name"
            placeholder=""
            required=""
          />
          <small className="text-muted">Full name as displayed on card</small>
          <div className="invalid-feedback"> Name on card is required </div>
        </div>
        <div className="col-md-6 mb-3">
          <label>Credit card number</label>
          <input
            type="text"
            className="form-control"
            id="cc-number"
            placeholder=""
            required=""
          />
          <div className="invalid-feedback">
            {" "}
            Credit card number is required{" "}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 mb-3">
          <label>Expiration</label>
          <input
            type="text"
            className="form-control"
            id="cc-expiration"
            placeholder=""
            required=""
          />
          <div className="invalid-feedback"> Expiration date required </div>
        </div>
        <div className="col-md-3 mb-3">
          <label>CVV</label>
          <input
            type="text"
            className="form-control"
            id="cc-cvv"
            placeholder=""
            required=""
          />
          <div className="invalid-feedback"> Security code required </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
