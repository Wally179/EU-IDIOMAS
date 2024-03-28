import React, { forwardRef, useState, useEffect } from "react";
import "./intro.css";
import ModalContato from "../modal/modal";
import img from "../../img/MosaicoEU.svg";

const Intro = forwardRef((props, ref) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="containerI" ref={ref}>
      <div className="backgroundI">
        <div className="contentI">
          <div className="textI">
            <ModalContato isOpen={modalOpen} onClose={closeModal} />
            <img src={img} alt="Garota" className="imgCel" />
            <div className="titleI">Inglês com EU Idiomas. </div>
            <div className="descriptionI">
              Este é um site de captação de clientes e alunos para as
              profissionais independentes Elaine Cristina Nicolodelli e Ully
              Emeli Schulze.
            </div>
            <div className="contactI">
              <button type="button" className="buttonI" onClick={openModal}>
                Entre em contato!
              </button>
            </div>
          </div>
          <div className="imagesI">
            <img src={img} alt="Garota" className="imgMetodo" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Intro;
