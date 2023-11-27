import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="text-footer" id="Footer_text-footer__FtDZ2">
      <Row className="text-bg-light p-3">
        <Col md={1} className="d-none d-md-block"></Col>
        <Col md={4}>
          <Image
            src="https://juiceshop.com/cdn/shop/files/FooterCartLogo3_600x_920720f9-3e86-4aa4-9469-6d5d4c3402db_400x.png?v=1674091452"
            alt="truck-img"
            className="w-50 ms-2"
          />
        </Col>

        <Col md={2} className="pt-4 ">
          <Nav className="flex-column">
            <Nav.Link href="/">
              <i></i>OUR STORY
            </Nav.Link>
            <Nav.Link href="/">
              <i></i>OUR JUICE
            </Nav.Link>
            <Nav.Link href="/">
              <i></i>VISIT
            </Nav.Link>
            <Nav.Link href="/">
              <i></i>SUSTAINABILITY
            </Nav.Link>
          </Nav>
        </Col>

        <Col md={2} className="pt-4">
          <Nav className="flex-column">
            <Nav.Link href="/">
              <i></i>FAQ
            </Nav.Link>
            <Nav.Link href="/">
              <i></i>EVENTS & CATERING
            </Nav.Link>
            <Nav.Link href="/">
              <i></i>WHOLESALE
            </Nav.Link>
            <Nav.Link href="/">
              <i></i>CAREERS
            </Nav.Link>
          </Nav>
        </Col>

        <Col md={2} className="pt-4">
          <Nav className="flex-column">
            <Nav.Link href="/">
              <i className="bi bi-facebook Footer_bi__i+YNT"></i>
            </Nav.Link>
            <Nav.Link href="/">
              <i className="bi bi-instagram Footer_bi__i+YNT"></i>
            </Nav.Link>
            <Nav.Link href="/">
              <i></i>CONTACT US
            </Nav.Link>
          </Nav>
        </Col>
      </Row>

      <Row>
        <Col md={2} className="border-top pt-2 mt-2"></Col>
        <Col md={4} className="border-top pt-2 mt-2">
          <p> © 2023 JUICE SHOP | ALL RIGHTS RESERVED </p>
        </Col>
        <Col md={1} className="border-top pt-2 mt-2">
          <Nav.Link href="/">
            <i></i>TERMS OF USE
          </Nav.Link>
        </Col>
        <Col md={1} className="border-top pt-2 mt-2">
          <Nav.Link href="/">
            <i></i>PRIVACY POLICY
          </Nav.Link>
        </Col>
        <Col md={2} className="border-top pt-2 mt-2">
          <Nav.Link href="/">
            <i></i>RETURNS POLICY
          </Nav.Link>
        </Col>
        <Col md={2} className="border-top pt-2 mt-2"></Col>
      </Row>
    </Container>
  );
};

export default Footer;
