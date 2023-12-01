import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarStyle from "../styles/components/NavBar.module.css";
import ProfileIcon from "./icons/ProfileIcon";
import { useNavigate } from "react-router";
import CartDrawer from "./CartDrawer";

function NavBar({ setHovered }) {
  const navigate = useNavigate();
  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  return (
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
              <Nav.Link
                className={`d-flex justify-content-center`}
                href="#home"
              >
                <span
                  className={`${NavbarStyle.correctColorNavbar} ${NavbarStyle.navItemHover}`}
                >
                  ALL PRODUCTS
                </span>
              </Nav.Link>
              <Nav.Item
                className={`${NavbarStyle.subnavbtn}`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <span className={`${NavbarStyle.navItemHover}`}>
                  CATEGORIES
                </span>
                <div className={NavbarStyle.subnavContent}>
                  <Nav.Link href="/juices">Juices</Nav.Link>
                  <Nav.Link href="/elixirs">Elixirs</Nav.Link>
                  <Nav.Link href="/nut-milks&smoothies">
                    Nut milks &amp; smoothies
                  </Nav.Link>
                  <Nav.Link href="/sparkling-juice">Sparkling tonics</Nav.Link>
                </div>
              </Nav.Item>
            </div>
            <div className="d-flex justify-content-lg-end align-items-center fix-navbar">
              <Nav.Link
                className={`${NavbarStyle.correctColorNavbar} d-flex justify-content-center align-items-center`}
                onClick={() => navigate("/login")}
              >
                <ProfileIcon />
              </Nav.Link>
              <Nav.Link
                className={`${NavbarStyle.correctColorNavbar}`}
                onClick={() => navigate("/cart")}
              >
                <CartDrawer />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
