import React from "react";

const Modal = ({ setModalShowed, message }) => {
  const CloseModal = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) setModalShowed(false);
  };
  return (
    <div className="modal__container" onClick={(e) => CloseModal(e)}>
      <div className="modal">
        <button onClick={() => setModalShowed(false)}>X</button>
          {message}
      </div>
    </div>
  );
};

export default Modal;