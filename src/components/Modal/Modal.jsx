import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Modal.css";

function Modal({ children, closeModal }) {
  return (
    <div className="modal">
      <div className="modalContainer">
        <AiFillCloseCircle className="closeModal" onClick={closeModal} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
