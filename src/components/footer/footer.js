import React from "react";
import "./footer.css";
import logo from "../../img/Asset3.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <img src={logo} alt="logo" className="center" />
      </div>
      <div className="footer-content">
        <div className="footer-text">2024 - EU Idiomas, aulas e traduções.</div>
        <div className="footer-icons">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be2b08027883e139b0631b921582ee1c2809173d319927df4095e019cd926068?apiKey=575e1c58e30d4d41a45d500f16151431&"
            className="footer-icon"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/94ff2ed4ccd5561ac1c8dde99509202f19c78615110be8d6ef965930420f651f?apiKey=575e1c58e30d4d41a45d500f16151431&"
            className="footer-icon"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/647cb65d705c50c034185a473a71661457093cd5f80e6f90cb2fe80805f26717?apiKey=575e1c58e30d4d41a45d500f16151431&"
            className="footer-icon"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18436b7d2970336ca39d99e6e342569768d616c29d5dbd2c9611a30bedc1e3b8?apiKey=575e1c58e30d4d41a45d500f16151431&"
            className="footer-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
