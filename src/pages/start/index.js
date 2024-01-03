/* eslint-disable jsx-a11y/img-redundant-alt */
import Navbar from "../../components/navbar/navbar.jsx";
import "./style.css";

function Inicio() {
  return (
    <div className="container">
      <Navbar />
      <div className="background">
        <div className="content">
          <div className="text">
            <div className="title">
              Dorem ipsum dolor sit amet, porém elus a elit.
            </div>
            <div className="description">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </div>
            <div className="contact">
              <button type="button" className="button">
                Entre em contato!
              </button>
            </div>
          </div>
          <div className="images">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd1cd602de1ce5f75f5026070bcb93c9f85cffe779b0b87f1fb064512be0a4be?apiKey=575e1c58e30d4d41a45d500f16151431&width=1600"
              alt="Image 1"
              className="image"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fe530a45e24373fe2fd547fbca49d6733ba9b6f7aab8c2441c38db5b4a90f06?apiKey=575e1c58e30d4d41a45d500f16151431&width=1600"
              alt="Image 2"
              className="image2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
