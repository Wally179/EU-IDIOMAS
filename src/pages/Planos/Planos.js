import * as React from "react";
import "./Planos.css";
import fundo from "../../img/FundoElaine.svg";
import whats from "../../img/whatsapp.svg";

function Planos(props) {
  return (
    <>
      <div className="pagTradu-container">
        <div className="pagTradu-header">
          <img loading="lazy" className="pagTradu-image" src={fundo} />
          <div className="pagTradu-content">
            <div className="Planos-Content">
              <div className="planos-title">Conheça nossos planos!</div>
              <div className="planos-description">
                Nossos preços são baseados no seu país de residência. Entre em
                contato e solicite um orçamento.
              </div>
              <div className="planos">
                <div className="planos-container">
                  <div className="planos1">
                    <div className="plano-titulo">Crew - Inglês geral</div>
                    <div className="plano-descri">Aulas em grupo</div>
                    <div className="CTA-planos">
                      <img
                        loading="lazy"
                        src={whats}
                        className="CTA-planos-img"
                      />
                      <div className="CTA-text-planos">Entrar em contato</div>
                    </div>
                  </div>
                  <div className="planos2">
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">Aulas em grupo;</div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">1 aula por semana de 1h30m;</div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">Máximo 4 alunos por horário;</div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">
                        Possibilidade: você cria seu grupo (chame seus amigos);
                      </div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">
                        Uma aula extra de conversação por mês;
                      </div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">Material incluso;</div>
                    </div>
                  </div>
                </div>
                <div className="planos-container">
                  <div className="planos1">
                    <div className="plano-titulo">STAR - Inglês geral</div>
                    <div className="plano-descri">Aulas individuais</div>
                    <div className="CTA-planos">
                      <img
                        loading="lazy"
                        src={whats}
                        className="CTA-planos-img"
                      />
                      <div className="CTA-text-planos">Entrar em contato</div>
                    </div>
                  </div>
                  <div className="planos2">
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">Aulas individuais;</div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">2 aulas por semana de 1h;</div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">
                        1 aula teórica e 1 aula de listening e conversation;
                      </div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">
                        Possibilidade: recuperação de aula na última semana do
                        mês;
                      </div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">
                        Aulas desenvolvidas conforme sua necessidade;
                      </div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">Relatório de desenvolvimento</div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">Material incluso;</div>
                    </div>
                  </div>
                </div>
                <div className="planos-container">
                  <div className="planos1">
                    <div className="plano-titulo">EXECUTIVE - Business</div>
                    <div className="plano-descri">
                      Aulas de inglês para negócios
                    </div>
                    <div className="CTA-planos">
                      <img
                        loading="lazy"
                        src={whats}
                        className="CTA-planos-img"
                      />
                      <div className="CTA-text-planos">Entrar em contato</div>
                    </div>
                  </div>
                  <div className="planos2">
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">Aulas individuais;</div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">2 aulas por semana de 1h;</div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">
                        1 aula teórica e 1 aula de estudo de caso (aula
                        prática);
                      </div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">Inglês de negócios;</div>
                    </div>
                    <div className="divList">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b968b2165f3691528d8af19d039c78326d696fab9fc36eb0aef7fa9b2591350d?apiKey=575e1c58e30d4d41a45d500f16151431&"
                        className="iconList"
                      />
                      <div className="font">Material incluso;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Planos;
