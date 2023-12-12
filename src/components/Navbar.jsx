import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarStyle from "../styles/components/NavBar.module.css";
import ProfileIcon from "./icons/ProfileIcon";
import { useNavigate } from "react-router";
import CartDrawer from "./CartDrawer";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/buyerSlice";
import HomeStyle from "../styles/views/Home.module.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function NavBar({ setHovered }) {
  const buyer = useSelector((state) => state.buyer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleResetDB = async () => {
    await axios({
      method: "get",
      url: `${import.meta.env.VITE_URL_BASE_API}/resetdb`,
    });
    navigate("/");
  };

  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  const [categories, setCategories] = useState(null);
  const getCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_BASE_API}/category`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const cartItemCount = useSelector((state) => state.cart.cartItemCount);

  return (
    <>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        sticky="top"
        className={`p-0 ${NavbarStyle.bgNavbar}`}
      >
        <Container style={{ height: "100%" }}>
          <Navbar.Brand onClick={() => navigate("/")}>
            <h1 className={NavbarStyle.navbarBrand}>Juice Shop</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className={`${NavbarStyle.collapseNavbar} justify-content-lg-between h-100`}
            id="basic-navbar-nav"
          >
            <Nav className={`${NavbarStyle.navInsideCollapse}`}>
              <div className="d-flex flex-row fix-navbar h-100 align-items-center">
                <span
                  className={`${NavbarStyle.correctColorNavbar} ${NavbarStyle.subnavbtn} ${NavbarStyle.navItemHover}`}
                  onClick={() => navigate("/all-products")}
                >
                  ALL PRODUCTS
                </span>

                <Nav.Item
                  className={`${NavbarStyle.subnavbtn}`}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <span className={`${NavbarStyle.navItemHover}`}>
                    CATEGORIES
                  </span>
                  <div className={NavbarStyle.subnavContent}>
                    {categories &&
                      categories.map((category) => (
                        <NavLink
                          className="textUppercase"
                          key={category._id}
                          to={`category/${category._id}`}
                        >
                          {category.name}
                        </NavLink>
                      ))}
                  </div>
                </Nav.Item>
              </div>
              <div className="d-flex justify-content-lg-end align-items-center fix-navbar">
                <Dropdown>
                  <Dropdown.Toggle
                    as={Nav.Link}
                    className={`${NavbarStyle.correctColorNavbar} d-flex justify-content-center align-items-center`}
                  >
                    <ProfileIcon />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {!buyer && (
                      <Dropdown.Item onClick={() => navigate("/login")}>
                        Login
                      </Dropdown.Item>
                    )}
                    {!buyer && (
                      <Dropdown.Item onClick={() => navigate("/register")}>
                        Register
                      </Dropdown.Item>
                    )}
                    {!buyer && (
                      <Dropdown.Item onClick={() => navigate("/cart")}>
                        Cart
                      </Dropdown.Item>
                    )}
                    {buyer && (
                      <Dropdown.Item onClick={() => navigate("/profile")}>
                        Profile
                      </Dropdown.Item>
                    )}
                    {buyer && (
                      <Dropdown.Item onClick={handleLogout}>
                        Logout
                      </Dropdown.Item>
                    )}
                    <Dropdown.Item onClick={handleResetDB}>
                      Reset DB
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link className={`${NavbarStyle.correctColorNavbar}`}>
                  <CartDrawer cartItemCount={cartItemCount} />

                  {/* <span className={NavbarStyle.cartItemCount}>
                    {cartItemCount}
                  </span> */}
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Link to="/about-this-proyect">
        <button
          className={`${HomeStyle.aboutProject} ${HomeStyle.aboutProjectBig}`}
        >
          About this Project
        </button>
      </Link>
      <Link to="/about-this-proyect">
        <button
          className={`${HomeStyle.aboutProject} ${HomeStyle.aboutProjectSmall}`}
        >
          <i className="bi bi-person-raised-hand"></i>
        </button>
      </Link>
    </>
  );
}

export default NavBar;
