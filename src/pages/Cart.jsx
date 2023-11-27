import Table from "react-bootstrap/Table";

function Cart() {
  return (
    <div className="container">
      <h1 className="fw-bold">SHOPPING CART</h1>
      <Table striped>
        <thead>
          <tr>
            <th className="fw-bold" colSpan={2}>
              PRODUCTS
            </th>
            <th className="fw-bold">PRICE</th>
            <th className="fw-bold">QUANTITY</th>
            <th className="fw-bold">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <div>
                <img src="" alt="" />
                <p>Fall Punch</p>
              </div>
            </td>
            <td>13.00</td>
            <td>1</td>
            <td>13.00</td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td>Subtotal</td>
            <td className="fw-bold">13.00</td>
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
