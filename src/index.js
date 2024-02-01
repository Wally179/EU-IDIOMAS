import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Inicio from "./pages/start";
import Footer from "./components/footer/footer";
import Traduzir from "./pages/Traduzir/Traduzir";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <React.StrictMode>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/traduzir" component={Traduzir} />
        </Switch>
        <Footer />
      </div>
    </React.StrictMode>
  </Router>
);
