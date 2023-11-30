import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  const [value, setValue] = useState(1);
  const [hovered, setHovered] = useState(false);
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
      <Navbar setHovered={setHovered} />
      <div className={hovered ? "bg-dark-hover-nav " : ""}>
        <div className="container">
          <h1 className="woolwich text-center mt-5 mb-5">My basket</h1>
          <Table>
            <thead>
              <tr>
                <th className="fw-bold" colSpan={2}>
                  Products
                </th>
                <th className="fw-bold">Price</th>
                <th className="fw-bold">Quantity</th>
                <th className="fw-bold">Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-25" colSpan={2}>
                  <div className="d-flex gap-5" >
                    <img className="w-25" src="juices.PNG" alt="" />
                    <p>Fall Punch</p>
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
            </tbody>
          </Table>
          <div className="d-flex flex-row justify-content-end">
            <p className="fw-bold me-5">Subtotal</p>
            <p className="fw-bold">13.00</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
