import React, { useState, useEffect } from "react";

function Slider() {
  const [data, setData] = useState({
    descrip: "",
    nome: "",
    img: "",
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const dataArray = [
    {
      descrip:
        "“Sempre tive um bloqueio com o Inglês, e fazer as aulas individualmente com a Ully foi perfeito para que eu desenvolvesse segurança, pois ela permitiu que eu evoluísse ao meu ritmo e não tivesse vergonha de errar, as aulas sempre foram direcionadas para a minha área de trabalho, com temas do meu interesse. Com 1 ano de aulas, eu saí do 'extremo básico' para a capacidade de participar e conduzir reuniões em inglês e pretendo evoluir cada vez mais.”",
      nome: "Yasmin T. - Sao Paulo, Brasil",
      img: "https://i.imgur.com/xQ4KjHL.png", // Add image URL for Yasmin
    },
    {
      descrip:
        "“Eu faço aulas de inglês com a Elaine há cerca de 2 anos. Lembro de que quando começamos as aulas, não conseguia conversar em inglês por mais de 10 minutos e, ainda assim, com muita dificuldade! Hoje, graças às aulas, ganhei a confiança para viajar para países estrangeiros, sem nenhum problema para me comunicar em inglês, algo que nunca tinha imaginado ser possível antes das aulas. Este simples depoimento não será capaz de expressar o quão significativas são suas aulas. Aprender com ela é divertido, leve e extremamente proveitoso! Sou imensamente grata pela oportunidade de ser aluna dela e recomendaria, sem sombra de dúvidas, as suas aulas de inglês para qualquer pessoa que esteja buscando uma experiência de aprendizado enriquecedora.”",
      nome: "Sabrina C. - Santa Catarina, Brasil",
      img: "https://i.imgur.com/Y05YHck.png", // Add image URL for Sabrina
    },
    {
      descrip:
        "“Adoro praticar inglês com a Ully Schulze, porque conversamos em inglês sobre as mais diversas atualidades, que me mantêm atualizado e, ao mesmo tempo, ajuda a manter a fluência na língua inglesa. Uma hora de curso passa muito rápido e fico ansioso pela próxima aula para continuarmos aprendendo e evoluindo a fluência na língua inglesa. Super indico essa excelente profissional que hoje chamo de amiga.”",
      nome: "Vitor L.M. - Santa Catarina, Brasil",
      img: "https://i.imgur.com/R0T1Th3.png", // Add image URL for Sabrina
    },
    {
      descrip:
        "“Sempre tive vontade de aprender inglês, mas nunca encontrava uma oportunidade e sempre tinha um pouco de vergonha e uma insegurança. Depois que conheci a Ully Schulze , falando  com ela, me senti mais segura e comecei o inglês . E sinceramente estou super encantada, ela sempre muito flexível paciente e super atenta. Muito obrigada por sua motivação espero em breve estar falando inglês fluente .🙏🏻🙏🏻 Excelente professora! 💯💯💯💯”",
      nome: "Janayna B. - Madrid, Espanha",
      img: "https://i.imgur.com/Ek0OXqS.png", // Add image URL for Sabrina
    },
    {
      descrip:
        "“A Elaine não apenas me ensinou inglês, mas também a acreditar em mim mesmo. Gratidão! Obrigado por me ajudar a superar meus medos e desafios com a língua inglesa. You are a great teacher!”",
      nome: "Isa F. - Santa Catarina, Brasil",
      img: "https://i.imgur.com/nGU4gBr.png", // Add image URL for Sabrina
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
      <div className="div" style={{ marginBottom: "24px" }}>
        <img
          onClick={handleImageClick}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a12241d807dd05e53906537928b17c613ecfdc3b955d9b7c5a0540f3d8044b20?apiKey=575e1c58e30d4d41a45d500f16151431&"
          className="img-button"
        />
        <div className="div-3">
          <div className="div-4">
            <div className="div-5">{data.descrip}</div>
            <img src={data.img} alt="Foto do aluno" className="div-6" />
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
