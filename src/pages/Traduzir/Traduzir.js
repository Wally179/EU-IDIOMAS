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
              <div className="pagTradu-title">Lorem ipsum dolor sit amet</div>
              <div className="pagTradu-description">
                Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
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
