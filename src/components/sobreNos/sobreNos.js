import React from "react";
import "./styles.css";
import mosaico from "../../img/mosaico.png";
import { Link, useHistory } from "react-router-dom";

export const scrollToSobreNos = () => {
  const nosContent = document.querySelector(".nos-content");
  if (nosContent) {
    const offset = -90;
    const targetPosition =
      nosContent.getBoundingClientRect().top + window.scrollY + offset;

    window.scroll({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};

function SobreNos() {
  const history = useHistory();
  const handleLinkClick = () => {
    history.push("/QuemSomos");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <div className="nos-container">
      <div className="nos-content">
        <div className="nos-column nos-column-text">
          <span className="nos-section">
            <div className="nos-title">Sobre nós</div>
            <div className="nos-description">
              Somos professoras qualificadas e experientes no ensino presencial
              e a distancia. Já qualificamos centenas de alunos para adquirirem
              sua acreditação ESOL, CELTA, TESOL e ICAO, entre outros exames.
            </div>
            <div className="nos-description2">
              Temos um compromisso especial com cada um de nossos alunos e
              preparamos suas classes de acordo com seus interesses e áreas de
              especialização...
            </div>
            <Link
              to="/QuemSomos"
              className="metodo-cta"
              onClick={handleLinkClick}
            >
              <span className="nos-link">
                <div className="nos-link-text">Saiba mais</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/df1f1a98e7154374d65da57a3becfcb54f3631a7c3b10b36480f82a1820f5959?apiKey=575e1c58e30d4d41a45d500f16151431&"
                  className="nos-image"
                />
              </span>
            </Link>
          </span>
        </div>
        <div className="nos-column nos-column-image">
          <div className="nos-gallery">
            <div className="nos-gallery-1row">
              <img
                loading="lazy"
                srcSet={mosaico}
                className="nos-gallery-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNos;
