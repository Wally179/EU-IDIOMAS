import React, { useState, useEffect, useCallback } from "react";
import "./modal.css";

const ModalContato = ({ isOpen, onClose }) => {
  const handleClose = useCallback(() => {
    onClose();
  });

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && event.target.className === "modal-overlay") {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, handleClose]);

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <a
          href="https://wa.me/554788269124?text=Ol%C3%A1%21+Estou+interessado%28a%29+nos+servi%C3%A7os+disponibilizados+pelo+site%2C+poderias+me+enviar+mais+detalhes%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <button className="whatsapp-button elaine">WhatsApp da Elaine</button>
        </a>
        <a
          href="https://contate.me/euidiomas-ully"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <button className="whatsapp-button ully">WhatsApp da Ully</button>
        </a>
      </div>
    </div>
  ) : null;
};

export default ModalContato;
