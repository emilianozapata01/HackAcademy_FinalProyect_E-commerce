
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ContactStyle from "../styles/views/Contact.module.css";



const ContactUsModal = ({ showModal, handleClose}) => {
  const buyer = useSelector((state)=> state.buyer);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    
    if (buyer) {
      setFirstName(buyer.firstname || "");
      setLastName(buyer.lastname || "");
      setPhone(buyer.phone || "");
      setEmail(buyer.email || "");
    } else {
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
    }
  }, [buyer]);

  return (
    <Modal show={showModal} onHide={handleClose} centered>
        
        <div className={ContactStyle.bgc}>
        <Modal.Title className={`mt-3 ${ContactStyle.title}`}>CONTACT US!</Modal.Title>
      <Modal.Body className={ContactStyle.textBody}>
        <Form>
          <Form.Group controlId="formMessage" className="mb-4">
            <Form.Label className="h5">Message</Form.Label>
            <Form.Control as="textarea" rows={6} placeholder="Leave your message here" required/>
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formFirstName">
                <Form.Label className="h6">First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formLastName">
                <Form.Label className="h6">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          
          <Row>
            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label className="h6">Phone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label className="h6">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} className={ContactStyle.btn}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose} className={ContactStyle.btn}> 
          Send
        </Button>
      </Modal.Footer>
      </div>
    </Modal>
  );
};



export default ContactUsModal;





