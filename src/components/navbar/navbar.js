import React, { useState } from "react";
import "./style.css";
import logo from "../../img/Asset3.png";

function Navbar() {
  const [isActive, setActive] = useState(false);

  const navToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className="nav">
      <a href="/#" className="nav__brand">
        <img src={logo} alt="Logo" width={125} />
      </a>
      <ul className={`nav__menu ${isActive ? "nav__active" : ""}`}>
        {["INICIO", "SOBRE NÓS", "AULAS", "TRADUÇÕES", "DEPOIMENTOS"].map(
          (item, index) => (
            <li className="nav__item" key={index}>
              <a href="/#" className="nav__link">
                {item}
              </a>
            </li>
          )
        )}
        <li className="nav__item">
          <a href="/#" className="nav__link">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1b005eff6942fb33821068e742374a81a98c9ad87dd7a95e572e5c97671e9d?apiKey=575e1c58e30d4d41a45d500f16151431&"
              className="img-wpp"
              alt="WhatsApp"
            />
          </a>
        </li>
      </ul>
      <div
        onClick={navToggle}
        className={`nav__toggler ${isActive ? "toggle" : ""}`}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
