import * as React from "react";
import "./Material.css";
import fundo from "../../img/books.svg";
import book1 from "../../img/book1.svg";
import book2 from "../../img/book2.svg";
import book3 from "../../img/book3.svg";
function Material(props) {
  return (
    <>
      <div className="pagTradu-container">
        <div className="pagTradu-header">
          <img loading="lazy" className="pagTradu-image" src={fundo} />
          <div className="Material-conteiner">
            <div className="Material-Content">
              <div className="planos-title">Ebooks</div>
              <div className="infoMaterial">
                Traremos mais detalhes em breve!
              </div>
              <div className="mat-div">
                <div className="mat-div-2">
                  <img loading="lazy" src={book1} className="mat-img-1" />
                  <img loading="lazy" src={book2} className="mat-img-2" />
                  <img loading="lazy" src={book3} className="mat-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Material;
