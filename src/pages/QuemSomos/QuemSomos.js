import * as React from "react";
import "./QuemSomos.css";
import img from "../../img/MosaicoEU.svg";
import fundo from "../../img/FundoQuemSomos.svg";
function QuemSomos(props) {
  return (
    <>
      <div className="pagTradu-container">
        <div className="pagTradu-header">
          <img loading="lazy" className="pagTradu-image" src={fundo} />
          <div className="pagTradu-content">
            <div className="pagTradu-text">
              <div className="pagTradu-title">Quem Somos</div>
              <div className="pagTradu-description">
                Somos professoras qualificadas e experientes no ensino
                presencial e a distancia. Já qualificamos centenas de alunos
                para adquirirem sua acreditação ESOL, CELTA, TESOL e ICAO, entre
                outros exames.
              </div>
              <div className="pagTradu-description">
                Temos um compromisso especial com cada um de nossos alunos e
                preparamos suas classes de acordo com seus interesses e áreas de
                especialização.
              </div>
              <div className="pagTradu-description">
                Fazemos traduções para pessoa física ou jurídica, materiais
                acadêmicos ou jurídicos. Contamos com uma gama de trabalhos em
                diversas áreas do mercado internacional, assim com trabalhos de
                interpretação.
              </div>
              <div className="pagTradu-description">
                Elaine Nicolodelli e Ully Schulze têm mais de 16 anos de
                experiência em educação tradicional levando a seus alunos a
                qualidade e exclusividade que procuram e merecem, desde onde
                estiverem, e em todas as partes do globo.
              </div>
              <div className="pagTradu-description">
                Temos ensinado individualmente desde 2007, compartindo
                experiencias profissionais desde 2012 e novamente cruzando
                nossos caminhos em 2022, quando nos unimos em projecto nesta
                website.
              </div>
            </div>
            <div className="metodo-form">
              <img src={img} alt="Garota" className="imgMetodo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuemSomos;
