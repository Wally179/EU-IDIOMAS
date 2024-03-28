import * as React from "react";
import "./Metodologia.css";
import img from "../../img/metodo.jpeg";
function Metodologia(props) {
  return (
    <>
      <div className="pagTradu-container">
        <div className="pagTradu-header">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d86067825d2b5b3a71ba5056f2577a85e9144e0df86398513a913af26a72be5d?apiKey=575e1c58e30d4d41a45d500f16151431&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86067825d2b5b3a71ba5056f2577a85e9144e0df86398513a913af26a72be5d?apiKey=575e1c58e30d4d41a45d500f16151431&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86067825d2b5b3a71ba5056f2577a85e9144e0df86398513a913af26a72be5d?apiKey=575e1c58e30d4d41a45d500f16151431&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86067825d2b5b3a71ba5056f2577a85e9144e0df86398513a913af26a72be5d?apiKey=575e1c58e30d4d41a45d500f16151431&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86067825d2b5b3a71ba5056f2577a85e9144e0df86398513a913af26a72be5d?apiKey=575e1c58e30d4d41a45d500f16151431&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86067825d2b5b3a71ba5056f2577a85e9144e0df86398513a913af26a72be5d?apiKey=575e1c58e30d4d41a45d500f16151431&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86067825d2b5b3a71ba5056f2577a85e9144e0df86398513a913af26a72be5d?apiKey=575e1c58e30d4d41a45d500f16151431&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86067825d2b5b3a71ba5056f2577a85e9144e0df86398513a913af26a72be5d?apiKey=575e1c58e30d4d41a45d500f16151431&"
            className="pagTradu-image"
          />
          <div className="pagTradu-content">
            <div className="pagTradu-text">
              <div className="pagTradu-title">Metodologia</div>
              <div className="pagTradu-description">
                As aulas de língua inglesa adotam a abordagem comunicativa como
                metodologia, uma proposta dinâmica projetada para promover
                habilidades linguísticas práticas e comunicação significativa.
                Com uma incrível variedade de planos de aula, o programa
                prioriza cenários da vida real e atividades interativas para
                facilitar a aquisição do idioma. A estrutura do curso integra
                diversos materiais de aprendizagem, incluindo tarefas online,
                para envolver os alunos no uso autêntico do idioma e em
                contextos culturais. Ao aproveitar a abordagem comunicativa, a
                ênfase é colocada no desenvolvimento de habilidades de escuta,
                fala, leitura e escrita em conjunto, permitindo que os alunos
                adquiram naturalmente proficiência linguística através de uma
                comunicação rica em contexto.
              </div>
              <div className="pagTradu-description">
                Para aprimorar a experiência de aprendizagem, o curso incorpora
                recursos multimídia como flashcards e vídeos. Os flashcards
                servem como auxílios versáteis, reforçando a aquisição de
                vocabulário e auxiliando na memorização por meio de dicas
                visuais e auditivas. Além disso, o conteúdo de vídeo selecionado
                expõe os alunos a diversos sotaques, nuances culturais e estilos
                de comunicação autênticos, promovendo uma proficiência
                linguística completa. Através da integração estratégica destes
                elementos, as aulas visam criar um ambiente de aprendizagem
                envolvente que capacita os alunos a navegar com confiança pelos
                desafios linguísticos do mundo real.
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

export default Metodologia;
