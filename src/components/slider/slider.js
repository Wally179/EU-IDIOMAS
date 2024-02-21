import React, { useState, useEffect } from "react";

function Slider() {
  const [data, setData] = useState({
    descrip: "",
    nome: "",
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Simulando 3 valores na array
  const dataArray = [
    {
      descrip: "Excelente curso, aprendi muito em pouco tempo!",
      nome: "Ana Silva",
    },
    {
      descrip:
        "Os professores são incríveis, recomendo a todos! Os professores são incríveis, recomendo a todos! Os professores são incríveis, recomendo a todos! Os professores são incríveis, recomendo a todos! Os professores são incríveis, recomendo a todos! Os professores são incríveis, recomendo a todos! Os professores são incríveis, recomendo a todos! Os professores são incríveis, recomendo a todos! Os professores são incríveis, recomendo a todos! Os professores são incríveis, recomendo a todos! Os professores são incríveis, recomendo a todos! ",
      nome: "Carlos Oliveira",
    },
    {
      descrip: "O curso me ajudou a ganhar confiança no meu inglês.",
      nome: "Juliana Santos",
    },
  ];

  useEffect(() => {
    setData(dataArray[currentIndex]);

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataArray.length);
    }, 30000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleImageClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + dataArray.length) % dataArray.length
    );
  };

  return (
    <>
      <div className="div">
        <img
          onClick={handleImageClick}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a12241d807dd05e53906537928b17c613ecfdc3b955d9b7c5a0540f3d8044b20?apiKey=575e1c58e30d4d41a45d500f16151431&"
          className="img-button"
        />
        <div className="div-3">
          <div className="div-4">
            <div className="div-5">{data.descrip}</div>
            <div className="div-6" />
            <div className="div-7">{data.nome}</div>
          </div>
        </div>
        <img
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % dataArray.length)
          }
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/56fe4b69fcd772ab1060f52d349d6c05a125e85d6567b69d69b2acffb7147c7a?apiKey=575e1c58e30d4d41a45d500f16151431&"
          className="img-button"
        />
      </div>
      <style jsx>{`
        .div {
          align-items: center;
          justify-content: center;
          display: flex;
          gap: 20px;
          width: 100% !important;
        }
        @media (max-width: 991px) {
          .div {
            gap: 0px;
          }
        }

        .div-3 {
          border-radius: 10px;
          box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.07),
            0px 10px 15px -3px rgba(0, 0, 0, 0.1);
          background-color: var(--White, #fff);
          align-self: stretch;
          display: flex;
          flex-grow: 1;
          padding: 25px 40px;
          flex-basis: 0%;
          flex-direction: column;
          justify-content: center;
          color: var(--Blue-Gray-900, #0f172a);
          text-align: center;
          max-width: 60vw;
          min-width: 50vw !important;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            padding: 0px;
          }
        }
        .div-4 {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            padding: 20px 20px;
          }
        }
        .div-5 {
          margin-top: 24px;
          color: var(--Cinza-escuro-texto, #171219);
          font-family: Gilroy;
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 120%; /* 24px */
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            margin-top: 8px;
          }
        }
        .div-6 {
          border-radius: 100px;
          background-color: rgba(0, 0, 0, 0.2);
          align-self: center;
          margin-top: 56px;
          width: 64px;
          height: 64px;
        }
        @media (max-width: 991px) {
          .div-6 {
            margin-top: 16px;
          }
          .img-button {
            width: 18px;
            height: 18px;
          }
        }
        .img-button {
          cursor: pointer;
          width: 64px;
          height: 64px;
          transition: transform 0.2s ease-in-out;
        }

        .img-button:hover {
          transform: scale(1.3);
        }
        .div-7 {
          margin-top: 8px;
          color: var(--Cinza-escuro-texto, #171219);
          font-family: Gilroy;
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 120%; /* 24px */
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Slider;
