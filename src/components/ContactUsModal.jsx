import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactStyle from "../styles/components/Contact.module.css";

const ContactUsModal = ({ showModal, handleClose }) => {
  const buyer = useSelector((state) => state.buyer);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(buyer);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose(); 
  };

  return (
    <div className={`modal fade ${showModal ? "show" : ""}`} tabIndex="-1" style={{ display: showModal ? "block" : "none" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className={`modal-content ${ContactStyle.modalContainer}`}>
          <div className={`modal-header ${ContactStyle.modalHeader}`}>
            <h1 className={ContactStyle.title}>CONTACT US!</h1>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className={`modal-body ${ContactStyle.modalBody}`}>
            <form className="d-flex flex-column gap-3 mt-3 w-100" onSubmit={handleSubmit}>
              <div className="d-flex flex-column gap-3">
                <div className="row">
                  <div className="col-sm-12 col-md-6 mt-3">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First name"
                      className="form-control"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      autoComplete="on"
                    />
                  </div>
                  <div className="d-flex flex-column col-sm-12 col-md-6 mt-3">
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last name"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      autoComplete="on"
                    />
                  </div>
                  <div className="d-flex flex-column col-sm-12 col-md-6 mt-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="on"
                    />
                  </div>
                  <div className="d-flex flex-column col-sm-12 col-md-6 mt-3">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone number (optional)"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}

                      autoComplete="on"
                    />
                  </div>
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="form-control"
                  required
                  rows="8"
                ></textarea>
              </div>
              <button type="submit" className={`mt-4 ${ContactStyle.btn}`}>
                <span>Juice it!</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;

