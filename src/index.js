import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Inicio from "./pages/start";
import Footer from "./components/footer/footer";
import Traduzir from "./pages/Traduzir/Traduzir";
import Metodologia from "./pages/Metodologia/Metodologia";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import Ully from "./pages/Ully/Ully";
import Elaine from "./pages/Elaine/Elaine";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Planos from "./pages/Planos/Planos";
import "./App.css";
import Material from "./pages/Material/Material";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <React.StrictMode>
      <div style={{ backgroundColor: "white" }}>
        <ToastContainer />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/EU-IDIOMAS" component={Inicio} />
          <Route path="/traduzir" component={Traduzir} />
          <Route path="/metodo" component={Metodologia} />
          <Route path="/QuemSomos" component={QuemSomos} />
          <Route path="/Ully" component={Ully} />
          <Route path="/Elaine" component={Elaine} />
          <Route path="/Planos" component={Planos} />
          <Route path="/Material_Utilizado" component={Material} />
        </Switch>
        <Footer />
      </div>
    </React.StrictMode>
  </Router>
);
