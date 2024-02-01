import React from "react";
import Pq from "../../components/Pq/Pq.js";
import SobreNos from "../../components/sobreNos/sobreNos.js";
import Metodo from "../../components/metodo/metodo.js";
import Intro from "../../components/intro/Intro.js";
import Traduzir from "../Traduzir/Traduzir.js";

function Inicio() {
  return (
    <div id="Inicio">
      <Intro />
      <Pq />
      <SobreNos />
      <Metodo />
    </div>
  );
}

export default Inicio;
