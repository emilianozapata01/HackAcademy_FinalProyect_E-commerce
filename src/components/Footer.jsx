import { Container, Row, Col } from "react-bootstrap";
import { Image, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      className="text-footer mt-5"
      id="Footer_text-footer__FtDZ2"
    >
      <Row className="text-bg-light p-3">
        <Col md={4}>
          <Image
            src="https://juiceshop.com/cdn/shop/files/FooterCartLogo3_600x_920720f9-3e86-4aa4-9469-6d5d4c3402db_400x.png?v=1674091452"
            alt="truck-img"
            className="w-50 ms-2 mt-4"
          />
        </Col>

        <Col md={3} className="pt-4">
          <Nav className="flex-column">
            <Nav.Link href="/all-products">
              <i></i>STORE
            </Nav.Link>
            <Nav.Link href="/sustainability">
              <i></i>SUSTAINABILITY
            </Nav.Link>
            <Nav.Link href="/frequently-asked-questions">
              <i></i>FAQ
            </Nav.Link>
          </Nav>
        </Col>

        <Col md={3} className="pt-4">
          <Nav className="flex-column">
            <Nav.Link href="https://www.facebook.com/juiceshopsf/">
              <i className="bi bi-facebook Footer_bi__i+YNT"></i>
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/juiceshopsf/">
              <i className="bi bi-instagram Footer_bi__i+YNT"></i>
            </Nav.Link>
            <Nav.Link href="/contact-us">
              <i></i>CONTACT US
            </Nav.Link>
          </Nav>
        </Col>
        <Col md={2}>
          <Image src="js.png" alt="logo-img" className="w-50 ms-2 mt-4" />
          <p>© 2023 JUICE SHOP</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
