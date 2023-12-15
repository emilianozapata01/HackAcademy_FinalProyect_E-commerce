import React from "react";
import { Modal } from "react-bootstrap";
import ContactStyle from "../styles/components/Contact.module.css";

const WelcomeModal = () => {
  const [showModal, setShowModal] = React.useState(true);

  const handleClose = () => setShowModal(false);

  const handleGoClick = () => {
    handleClose();
  };

  const handleLearnMoreClick = () => {
    handleClose();

    const learnMoreLink = document.getElementById("learnMoreLink");
    if (learnMoreLink) {
      learnMoreLink.click();
    }
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      centered
      dialogClassName={ContactStyle.customModal}
    >
      <Modal.Header closeButton>
        <Modal.Title className={`${ContactStyle.title} ms-3`}>
          WELCOME!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="ms-3">
          <p>
            This e-commerce is the brainchild of four students from the Coding
            Bootcamp at Hack Academy.
          </p>

          <a id="learnMoreLink" href="#" style={{ display: "none" }}></a>
          <button
            type="button"
            className={`mb-4 ${ContactStyle.btn}`}
            onClick={handleLearnMoreClick}
          >
            <span>Wanna know more?</span>{" "}
          </button>
          <div>
            <p className="mt-4">
              Before diving in, give the database a quick reset for a smoother
              ride.
            </p>
            <button type="button" className={`mb-4 ${ContactStyle.btn}`}>
              <span>RESET DATABASE</span>{" "}
            </button>
          </div>
          <p className="mt-4">
            Test out different features by logging in as a buyer or an admin. Go
            wild with both from the login menu.{" "}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer centered="true" className="d-flex justify-content-between">
        <img className="modalLogo " src="/nav-logo.png" alt="Juice Shop" />

        <p>Happy testing!</p>

        <button
          type="button"
          className={`mt-4 ${ContactStyle.btnGo}`}
          onClick={handleGoClick}
        >
          <span>GO!</span>{" "}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default WelcomeModal;
