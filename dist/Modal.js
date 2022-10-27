import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
const Modal = ({
  setModalShowed
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
  }, "X"), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faUserCheck
  }), /*#__PURE__*/React.createElement("h2", null, "Employee Created!")));
};
export default Modal;