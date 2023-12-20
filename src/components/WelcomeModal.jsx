import React from "react";
import { Modal } from "react-bootstrap";
import ContactStyle from "../styles/components/Contact.module.css";
import { Link } from "react-router-dom";

const WelcomeModal = () => {
  const [showModal, setShowModal] = React.useState(true);

  const handleClose = () => setShowModal(false);

  const handleGoClick = () => {
    handleClose();
  };

  const handleLearnMoreClick = () => {
    handleClose();
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
          BIENVENIDOS A JUICESHOP!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mx-2">
          <p>
            Este e-commerce es el proyecto final de cuatro estudiantes del
            Coding Bootcamp de <a href="https://ha.dev/">Hack Academy</a>
          </p>

          <a id="learnMoreLink" href="#" style={{ display: "none" }}></a>
          <button
            type="button"
            className={` ${ContactStyle.btnModal}`}
            onClick={handleLearnMoreClick}
          >
            <Link to="/about-this-proyect">
              <span>MÁS SOBRE ESTE PROYECTO</span>
            </Link>
          </button>
          <div>
            <p className={ContactStyle.modalP}>
              Antes de recorrerlo, recomendamos un reinicio rápido de la base de
              datos para una mejor experiencia:
            </p>
            <button type="button" className={` ${ContactStyle.btnModal}`}>
              <span>REINICIAR BASE DE DATOS</span>{" "}
            </button>
          </div>
          <p className={ContactStyle.modalP}>
            Probá diferentes funciones al iniciar sesión como comprador o
            administrador desde el menú de inicio de sesión.{" "}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer
        centered="true"
        className={` ${ContactStyle.footerResponsive}`}
      >
        <img className="modalLogo " src="/nav-logo.png" alt="Juice Shop" />

        <button
          type="button"
          className={`mt-4 ms-4 ${ContactStyle.btnGo}`}
          onClick={handleGoClick}
        >
          <span>HAPPY TESTING!</span>{" "}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default WelcomeModal;
