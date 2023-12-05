import RegisterStyle from "../styles/views/Register.module.css";
import NotFoundVideo from "/videos/NotFoundVideo.mp4";
import NotFoundStyle from "../styles/views/NotFound.module.css";
import { HiArrowLeft } from "react-icons/hi";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/buyerSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setShowNavAndFooter }) {
  const buyer = useSelector((state) => state.buyer);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buyerLogIn = async (e) => {
    const response = await axios({
      method: "post",
      url: `${import.meta.env.VITE_URL_BASE_API}/tokens`,
      data: {
        email: e.target.email.value,
        password: e.target.password.value,
      },
    });
    if (response.data.msg) {
      setWrongCredentials(true);
    } else {
      setWrongCredentials(false);
      dispatch(login(response.data));
      setShowNavAndFooter(true);
      navigate("/");
    }
  };

  const handeSubmitLogin = (e) => {
    e.preventDefault();
    setWrongCredentials(false);
    buyerLogIn(e);
  };

  useEffect(() => {
    buyer && navigate("/");
    setShowNavAndFooter(false);
  }, []);

  return (
    <>
      <Link to="/" className={RegisterStyle.backArrow}>
        <HiArrowLeft stroke="#fff" strokeWidth="1px" fill="none" size="30px" />
      </Link>
      <video autoPlay loop muted className={NotFoundStyle.notFoundVideo}>
        <source src={NotFoundVideo} type="video/mp4" />
      </video>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className={RegisterStyle.title}>Juice Shop</h1>
        <div className={RegisterStyle.register}>
          <h2 className="text-light">Log in</h2>
          <small className="text-light">Squeeze in and get juiced up!</small>
          <form
            className="d-flex flex-column gap-3 mt-3 w-100"
            onSubmit={(e) => handeSubmitLogin(e)}
          >
            <div className="d-flex flex-column gap-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                required
                autoComplete="on"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                required
                autoComplete="on"
              />
            </div>
            {wrongCredentials && (
              <small className="text-danger fs-6">
                Wrong email or password
              </small>
            )}
            <button type="submit" className={RegisterStyle.registerBtn}>
              <span>Log in</span>
            </button>
            <small className="text-light">Don&apos;t have an account?</small>
            <button
              className={RegisterStyle.registerBtn}
              onClick={() => navigate("/register")}
            >
              <span>Sign Up</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
