import React from "react";
const Modal = ({
  setModalShowed,
  message
}) => {
  const CloseModal = e => {
    e.preventDefault();
    if (e.target === e.currentTarget) setModalShowed(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal__container",
    onClick: e => CloseModal(e)
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setModalShowed(false)
  }, "X"), message));
};
export default Modal;