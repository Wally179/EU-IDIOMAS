/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./EstiloMetodo.css";
import { Link, useHistory } from "react-router-dom";

export const scrollToTradu = () => {
  const nosContent = document.querySelector(".traduaqui");
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

export const scrollToAula = () => {
  const mainContainer = document.querySelector(".metodo-container");
  if (mainContainer) {
    mainContainer.scrollIntoView({ behavior: "smooth" });
  }
};

function Metodo() {
  const history = useHistory();
  const handleLinkClick = () => {
    history.push("/traduzir");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };
  const handleLinkClickMetodo = () => {
    history.push("/metodo");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };
  return (
    <div className="metodo-container">
      <div className="metodo-content">
        <div className="metodo-section">
          <div className="metodo-grid">
            <div className="metodo-left-column">
              <div className="metodo-image-container">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&"
                  className="metodo-image"
                />
              </div>
            </div>
            <div className="metodo-right-column">
              <div className="metodo-text-container">
                <div className="metodo-heading">Aulas</div>
                <div className="metodo-description">
                  As aulas de língua inglesa adotam a abordagem comunicativa
                  como metodologia, uma proposta dinâmica projetada para
                  promover habilidades linguísticas práticas e comunicação
                  significativa. Com uma incrível variedade de planos de aula, o
                  programa prioriza cenários da vida real e atividades
                  interativas para facilitar a aquisição do idioma. A estrutura
                  do...
                </div>
                <Link
                  to="/metodo"
                  className="metodo-cta"
                  onClick={handleLinkClickMetodo}
                >
                  <div className="metodo-cta">
                    <div className="metodo-cta-text">Saiba mais</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/45b3e78ae6c372a72dcd4e39555cd156ac1b8d2760394b5ea77a22ddf769e21e?apiKey=575e1c58e30d4d41a45d500f16151431&"
                      className="metodo-cta-image"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="metodo-section space traduaqui">
          <div className="metodo-grid">
            <div className="metodo-left-column">
              <div className="metodo-image-container">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e500e0dea3ad8439bb9a2aa27af2aaa862092e45aa98f870ff5afc42f5ab71d4?apiKey=575e1c58e30d4d41a45d500f16151431&"
                  className="metodo-imageMobile"
                />
              </div>
              <div className="metodo-text-container">
                <div className="metodo-heading ">Traduções</div>
                <div className="metodo-description">
                  Apesar das diversas ferramentas digitais usadas para a
                  tradução espontânea existentes no mercado nos dias de hoje,
                  temos evidências de que elas na maioria das vezes, não fazem
                  um trabalho fidedigno, ou seja, não correspondem exatamente ao
                  texto falado ou escrito. As variações linguísticas que um
                  texto pode apresenta...
                  <br />
                </div>
                <Link
                  to="/traduzir"
                  className="metodo-cta"
                  onClick={handleLinkClick}
                >
                  <div className="metodo-cta-text">Saiba mais</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/df1f1a98e7154374d65da57a3becfcb54f3631a7c3b10b36480f82a1820f5959?apiKey=575e1c58e30d4d41a45d500f16151431&"
                    className="metodo-cta-image"
                  />
                </Link>
              </div>
            </div>
            <div className="metodo-right-column">
              <div className="metodo-image-container">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/332b15e6cd1e89eed00a9397c954cec83d9dd59002f4506dda9fa3eb0e5d57c4?apiKey=575e1c58e30d4d41a45d500f16151431&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/332b15e6cd1e89eed00a9397c954cec83d9dd59002f4506dda9fa3eb0e5d57c4?apiKey=575e1c58e30d4d41a45d500f16151431&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/332b15e6cd1e89eed00a9397c954cec83d9dd59002f4506dda9fa3eb0e5d57c4?apiKey=575e1c58e30d4d41a45d500f16151431&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/332b15e6cd1e89eed00a9397c954cec83d9dd59002f4506dda9fa3eb0e5d57c4?apiKey=575e1c58e30d4d41a45d500f16151431&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/332b15e6cd1e89eed00a9397c954cec83d9dd59002f4506dda9fa3eb0e5d57c4?apiKey=575e1c58e30d4d41a45d500f16151431&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/332b15e6cd1e89eed00a9397c954cec83d9dd59002f4506dda9fa3eb0e5d57c4?apiKey=575e1c58e30d4d41a45d500f16151431&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/332b15e6cd1e89eed00a9397c954cec83d9dd59002f4506dda9fa3eb0e5d57c4?apiKey=575e1c58e30d4d41a45d500f16151431&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/332b15e6cd1e89eed00a9397c954cec83d9dd59002f4506dda9fa3eb0e5d57c4?apiKey=575e1c58e30d4d41a45d500f16151431&"
                  className="metodo-image-3 float-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metodo;
