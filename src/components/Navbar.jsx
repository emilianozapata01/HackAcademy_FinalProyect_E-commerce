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
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Juice Shop</Navbar.Brand>
        <Nav.Link>All products</Nav.Link>
        <div
          className={NavbarStyle.subnav}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <button className={NavbarStyle.subnavbtn}>Categories</button>
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
