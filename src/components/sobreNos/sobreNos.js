import React from "react";
import "./styles.css";
import mosaico from "../../img/mosaico.png";

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
  return (
    <div className="nos-container">
      <div className="nos-content">
        <div className="nos-column nos-column-text">
          <span className="nos-section">
            <div className="nos-title">Sobre nós</div>
            <div className="nos-description">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. <br />
            </div>
            <span className="nos-link">
              <div className="nos-link-text">Saiba mais</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/df1f1a98e7154374d65da57a3becfcb54f3631a7c3b10b36480f82a1820f5959?apiKey=575e1c58e30d4d41a45d500f16151431&"
                className="nos-image"
              />
            </span>
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
