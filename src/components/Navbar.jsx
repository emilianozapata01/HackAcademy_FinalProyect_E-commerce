import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarStyle from "../styles/components/NavBar.module.css";

function NavBar({ setHovered }) {
  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Navbar sticky="top" className={`py-0 px-5 ${NavbarStyle.bgNavbar} top-0`}>
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <Navbar.Brand href="/">
          <h1
            style={{
              color: "#3a913f",
              textShadow:
                "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
            }}
          >
            Juice Shop
          </h1>
        </Navbar.Brand>
        <div
          className={`${NavbarStyle.subnav} ms-auto d-flex align-items-center`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Nav.Item className={NavbarStyle.subnavbtn}>
            Categories
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
        <Nav.Link href="/cart" className="text-white me-4">
          CART
        </Nav.Link>
        <Nav.Link
          href="http://localhost:4321/dashboard"
          className="text-white me-4 "
        >
          admin
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
