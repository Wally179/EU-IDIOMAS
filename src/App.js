import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Inicio from "./pages/start";
import Footer from "./components/footer/footer";
import "./App.css";
import Traduzir from "./pages/Traduzir/Traduzir";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/traduzir" component={Traduzir} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
