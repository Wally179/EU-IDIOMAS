import React from "react";
import "./Pq.css";
import imagem1 from "../../img/education.jpeg";

export const scrollToMainContainer = () => {
  const mainContainer = document.querySelector(".main-containerPQ");
  if (mainContainer) {
    mainContainer.scrollIntoView({ behavior: "smooth" });
  }
};
function Pq() {
  return (
    <div className="main-containerPQ">
      <div className="content-containerPQ">
        <div className="sectionPQ section-1PQ">
          <div className="content-columnPQ">
            <span className="content-wrapperPQ">
              <div className="headingPQ">Por que a EU Idiomas?</div>
              <div className="description2PQ">
                A EU Idiomas oferece aulas 100% digitais, garantindo o
                desenvolvimento da língua inglesa de forma eficiente e prática.
                Com aulas totalmente focadas em seu crescimento pessoal e
                profissional.
              </div>
              <img loading="lazy" src={imagem1} className="imagePQ" />
            </span>
          </div>

          <div className="content-column2PQ">
            <div className="section-2PQ">
              <div className="sub-sectionPQ sub-section-1PQ">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f5f37f524c06856fbe5a6dca204b581fc83109c1a1911a08f9adc92eb9227df?apiKey=575e1c58e30d4d41a45d500f16151431&width=100 100w, ..."
                  className="sub-imagePQ"
                />
                <span className="sub-contentPQ">
                  <div className="sub-headingPQ">Ambiente leve e seguro.</div>
                  <div className="sub-descriptionPQ">
                    Um espaço onde o medo ou vergonha não entram. Com aulas
                    voltadas para as suas necessidades, oferecemos um ambiente
                    descontraído e ao mesmo tempo propício em te levar adiante
                    com a língua inglesa.
                  </div>
                </span>
              </div>

              <div className="sub-sectionPQ sub-section-2PQ">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c444f7b89d32352e296e39897db9b1e5cfa17992be8fccba1fb35f4503fd5f?apiKey=575e1c58e30d4d41a45d500f16151431&width=100 100w, ..."
                  className="sub-imagePQ"
                />
                <span className="sub-contentPQ">
                  <div className="sub-headingPQ">
                    Promove habilidades sociais, acadêmicas e profissionais.
                  </div>
                  <div className="sub-descriptionPQ">
                    Mais do que o ensino do idioma. Nutrimos habilidades
                    sociais, acadêmicas e profissionais, promovendo uma
                    comunicação clara e efetiva, transformando você em um
                    cidadão global.
                  </div>
                </span>
              </div>

              <div className="sub-sectionPQ sub-section-3PQ">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f6b8e779414873bb7df7ec3828663b19ec888ee39aeb96f26287b594c8c833a?apiKey=575e1c58e30d4d41a45d500f16151431&width=100 100w, ..."
                  className="sub-imagePQ"
                />
                <span className="sub-contentPQ">
                  <div className="sub-headingPQ">Conteúdos diversificados.</div>
                  <div className="sub-descriptionPQ">
                    Uma combinação dinâmica de habilidades. Desde o
                    desenvolvimento de seu listening até o explorar de
                    literatura diversificada, além de te permitir estar com a
                    língua afiada com nossas aulas práticas.
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pq;
