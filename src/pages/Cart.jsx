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
        <div className="container ">
          <h1 className="woolwich text-center mt-5 mb-5">My basket</h1>

          <Table>
            <thead>
              <tr>
                <th className="fw-bold">Products</th>
                <th className="fw-bold">Price</th>
                <th className="fw-bold">Quantity</th>
                <th className="fw-bold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex gap-5  align-items-center">
                    <img className="cartImg" src="juices.PNG" alt="" />
                    <p>Fall Punch</p>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center w">
                    <p>13.00</p>
                  </div>
                </td>
                <td>
                  <div className="input-group">
                    <button className="btn btn-success" onClick={decreaseValue}>
                      <i className="bi bi-dash text-white"></i>
                    </button>
                    <input
                      className="text-center inputCart "
                      type="text"
                      value={value}
                    />
                    <button className="btn btn-success" onClick={increaseValue}>
                      <i className="bi bi-plus-lg text-white"></i>
                    </button>
                  </div>
                </td>

                <td>
                  <div>
                    <p classNameName="d-inline ">13.00</p>
                    <Link
                      classNameName="text-decoration-none text-danger ms-5"
                      to={""}
                    >
                      <i classNameName="bi bi-x-circle-fill"></i>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="d-flex flex-row justify-content-end space">
            <p className="fw-bold me-5">Subtotal</p>
            <p className="fw-bold">13.00</p>
          </div>
          <div className="divCheckout d-flex justify-content-end space">
            <button className="woolwich btn btn-dark ps-4 pe-4 fs-3 btnCheckout">
              checkout
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
