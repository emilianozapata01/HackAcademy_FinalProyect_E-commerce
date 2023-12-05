import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function Cart({ hovered, setShowNavAndFooter }) {
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
        <div className="container">
          <h1 className="fw-bold">SHOPPING CART</h1>
          <Table>
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
                  <div>
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
                <td>
                  <div>
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
                <td>
                  <Link className="text-decoration-none text-danger" to={""}>
                    <i className="bi bi-x-circle-fill"></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <td>Subtotal</td>
                <td className="fw-bold">13.00</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
