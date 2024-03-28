import * as React from "react";
import "./Traduzir.css";
import MyForm from "../../components/Myform/MyForm";

function Traduzir(props) {
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
              <div className="pagTradu-title">Tradução</div>
              <div className="pagTradu-description">
                Apesar das diversas ferramentas digitais usadas para a tradução
                espontânea existentes no mercado nos dias de hoje, temos
                evidências de que elas na maioria das vezes, não fazem um
                trabalho fidedigno, ou seja, não correspondem exatamente ao
                texto falado ou escrito.
                <br />
                <br />
                As variações linguísticas que um texto pode apresentar devem ser
                levadas em consideração a todo momento. E é por isso que estamos
                aqui, para lhes ajudar e fazer com que os seus discursos,
                documentos ou interações tenham a mesma intensidade que teriam
                no seu próprio idioma. Não tenha medo de falar ou se expressar
                por escrito. Estamos aqui para lhe dar todo o suporte necessário
                para o seu sucesso.
                <br />
                <br />
                Para solicitar um orçamento de tradução, preencha o formulário e
                solicite uma estimativa, sem custo e sem compromisso. Basta
                preencher o formulário localizado nesta página colocar o link do
                drive do arquivo. Caso prefira nos mandar o documento
                diretamente, e não o link, basta entrar em contato conosco
                através do e-mail euidiomas.traducoes@gmail.com. Lhe
                retornaremos o mais breve possível.
                <br />
                <br />
                Importante: Todo e qualquer arquivo ou documento compartilhado
                ou enviado para orçamento, será eliminado por EU Idiomas ao
                término do trabalho. Prezamos o sigilo e a segurança dos
                materiais enviados por nossos clientes.
              </div>
            </div>
            <div className="pagTradu-form">
              <div className="tituloTradu">
                Faça um orçamento para tradução:
              </div>
              <MyForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Traduzir;
