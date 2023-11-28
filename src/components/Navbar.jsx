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
    <Navbar sticky="top" className={`p-0 ${NavbarStyle.bgNavbar}`}>
      <Container fluid className="d-flex">
        <Navbar.Brand href="#">Juice Shop</Navbar.Brand>
        <div
          className={`${NavbarStyle.subnav} ms-auto`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Nav.Link className={NavbarStyle.subnavbtn}>Categories</Nav.Link>
          <div className={NavbarStyle.subnavContent}>
            <Nav.Link>Juices</Nav.Link>
            <Nav.Link>Elixirs</Nav.Link>
            <Nav.Link>Nut milks &amp; smoothies</Nav.Link>
            <Nav.Link>Sparkling tonics</Nav.Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
