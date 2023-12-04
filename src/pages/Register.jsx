import RegisterStyle from "../styles/views/Register.module.css";
import NotFoundVideo from "/videos/NotFoundVideo.mp4";
import NotFoundStyle from "../styles/views/NotFound.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/buyerSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setShowNavAndFooter }) {
  const [dupEmail, setDupEmail] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  setShowNavAndFooter(false);

  const createBuyer = async (e) => {
    const response = await axios({
      method: "post",
      url: `${import.meta.env.VITE_URL_BASE_API}/buyer`,
      data: {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        direction: e.target.address.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        password: e.target.password.value,
      },
    });
    if (response.data.msg) {
      switch (response.data.msg) {
        case "Buyer already exists":
          setDupEmail(true);
          break;
        case "Wrong credentials...":
          setWrongCredentials(true);
          break;
      }
    } else {
      setDupEmail(false);
      setWrongCredentials(false);
      dispatch(login(response.data));
      setShowNavAndFooter(true);
      navigate("/");
    }
  };

  const handeSubmitRegister = (e) => {
    e.preventDefault();
    createBuyer(e);
  };
  return (
    <>
      <video autoPlay loop muted className={NotFoundStyle.notFoundVideo}>
        <source src={NotFoundVideo} type="video/mp4" />
      </video>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className={RegisterStyle.title}>Juice Shop</h1>
        <div className={RegisterStyle.register}>
          <h2 className="text-light">Sign Up</h2>
          <small className="text-light">It&apos;s quick an easy. </small>
          <form
            className="d-flex flex-column gap-3 mt-3"
            onSubmit={(e) => handeSubmitRegister(e)}
          >
            <div className="d-flex flex-nowrap gap-3">
              <input
                type="text"
                name="firstname"
                placeholder="First name"
                className="form-control"
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                className="form-control"
                required
              />
            </div>
            <div className="d-flex flex-nowrap gap-3">
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="form-control"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile number"
                className="form-control"
                required
              />
            </div>
            <div className="d-flex flex-nowrap gap-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                required
              />
            </div>
            {dupEmail && (
              <small className="text-danger fs-6">
                Email already registered, try with another one.
              </small>
            )}
            {dupEmail && (
              <small className="text-danger fs-6">
                Email already registered, try with another one.
              </small>
            )}
            <button type="submit" className={RegisterStyle.registerBtn}>
              <span>Sign Up</span>
            </button>
            <small className="text-light">Alredy have an account?</small>
            <button className={RegisterStyle.registerBtn}>
              <span>Log in</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
