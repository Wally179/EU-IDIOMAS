import * as React from "react";
import img from "../../img/MosaicoEU.svg";
import fundo from "../../img/FundoUlly.svg";
function Ully(props) {
  return (
    <>
      <div className="pagTradu-container">
        <div className="pagTradu-header">
          <img loading="lazy" className="pagTradu-image" src={fundo} />
          <div className="pagTradu-content">
            <div className="pagTradu-text">
              <div className="pagTradu-title">Quem Somos - Ully</div>
              <div className="pagTradu-description">
                Ully Schulze: Professora de inglês e tradutora a mais de 20
                anos. Com vivência nos Estados Unidos e experiência acadêmica no
                país de mais de 10 anos. Tutora e coaching especializada em
                negócios e no apoio a seleção de empregos e entrevistas no
                exterior.
              </div>
              <div className="pagTradu-description">
                Bacharel em Administração e Gestão de Empresas com
                especialização Financeira em Contabilidade e Fiscalidade. Pós
                Graduada em Life Coaching, Terapia Cognitivo-Comportamental,
                Programação Neurolinguística, Coordenação Pedagógica com Ênfase
                em Gestão de Pessoas e Docencia no Ensino Superior.
              </div>
            </div>
            <div className="metodo-form">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fe530a45e24373fe2fd547fbca49d6733ba9b6f7aab8c2441c38db5b4a90f06?apiKey=575e1c58e30d4d41a45d500f16151431&width=1600"
                alt="Image 2"
                className="imgUlly"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ully;
