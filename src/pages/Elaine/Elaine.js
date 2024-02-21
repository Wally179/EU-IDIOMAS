import * as React from "react";
import fundo from "../../img/FundoElaine.svg";
function Elaine(props) {
  return (
    <>
      <div className="pagTradu-container">
        <div className="pagTradu-header">
          <img loading="lazy" className="pagTradu-image" src={fundo} />
          <div className="pagTradu-content">
            <div className="pagTradu-text">
              <div className="pagTradu-title">Quem Somos - Elaine</div>
              <div className="pagTradu-description">
                Professora de inglês e tradutora a mais de 12 anos, com vivência
                no exterior. Especializada em Inglês geral, de negócios e de TI,
                com experiência em tradução de documentos, textos acadêmicos e
                em tradução simultânea para hospitais, advogados e imigração.
              </div>
              <div className="pagTradu-description">
                Licenciada em Letras – Português/Inglês, com uma sólida carreira
                na área da língua Inglesa. Atualmente atua como coordenadora do
                programa High School dentro da instituição Bom Jesus Santo
                Antônio, bem como professora de Inglês na referida instituição e
                tradutora de material didático para instituições internacionais.
              </div>
            </div>
            <div className="metodo-form">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd1cd602de1ce5f75f5026070bcb93c9f85cffe779b0b87f1fb064512be0a4be?apiKey=575e1c58e30d4d41a45d500f16151431&width=1600"
                alt="Image 1"
                className="imgUlly"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Elaine;
