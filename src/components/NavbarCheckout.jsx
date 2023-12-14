import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function NavBarCheckout() {
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <Navbar
      sticky="top"
      className={`py-0  bg-navbar top-0`}
      style={{ fontFamily: "woolwich-regular", height: "4rem" }}
      expand="lg"
    >
      <Container  className="fluid d-flex">
        <Navbar.Brand href="https://juiceshop-ha.vercel.app/">
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

        
        <Nav.Link
        onClick={handleCart}
          style={{
            color: "black",
            textShadow:
              "1px 0 #fff, -1px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
          }}
        >
          <i className="bi bi-bag"></i>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBarCheckout;
