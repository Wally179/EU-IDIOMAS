import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div className="containerI">
      <div className="backgroundI">
        <div className="contentI">
          <div className="textI">
            <div className="titleI">
              Dorem ipsum dolor sit amet, porém elus a elit.
            </div>
            <div className="descriptionI">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </div>
            <div className="contactI">
              <button type="button" className="buttonI">
                Entre em contato!
              </button>
            </div>
          </div>
          <div className="imagesI">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd1cd602de1ce5f75f5026070bcb93c9f85cffe779b0b87f1fb064512be0a4be?apiKey=575e1c58e30d4d41a45d500f16151431&width=1600"
              alt="Image 1"
              className="imageI"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fe530a45e24373fe2fd547fbca49d6733ba9b6f7aab8c2441c38db5b4a90f06?apiKey=575e1c58e30d4d41a45d500f16151431&width=1600"
              alt="Image 2"
              className="image2I"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
