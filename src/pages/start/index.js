/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import Intro from "../../components/intro/Intro.js";
import Metodo from "../../components/metodo/metodo.js";
import Navbar from "../../components/navbar/navbar.js";
import Pq from "../../components/Pq/Pq.js";
import SobreNos from "../../components/sobreNos/sobreNos.js";

function Inicio() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Pq />
      <SobreNos />
      <Metodo />
    </div>
  );
}

export default Inicio;
