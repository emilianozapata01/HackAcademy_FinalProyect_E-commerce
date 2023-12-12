import axios from "axios";
import { FaTrash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/buyerSlice";
import { useNavigate } from "react-router";

function DeleteButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Buyer = useSelector((state) => state.buyer);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleDelete = async () => {
   const response = await axios({
      method: "delete",
      url: `${import.meta.env.VITE_URL_BASE_API}/buyer/${Buyer.id}`,
      headers: {
        Authorization: `Bearer ${Buyer.token}`,
      },
    });
    setShow(false);
    console.log(response);
    handleLogout();
  };

  return (
    <>
      <button className="btn btn-danger" onClick={handleShow}>
       Delete profile
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to perform this action?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteButton;
