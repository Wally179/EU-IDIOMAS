import React from "react";
import Slider from "../slider/slider";

export const scrollToDepoimentos = () => {
  const nosContent = document.querySelector(".depoir");
  if (nosContent) {
    const offset = -90;
    const targetPosition =
      nosContent.getBoundingClientRect().top + window.scrollY + offset;

    window.scroll({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};

function Depoimentos() {
  return (
    <div className="dep-container depoir" style={{ marginBottom: "35px" }}>
      <div className="nos-content">
        <div className="nos-title" style={{ paddingBottom: "22px" }}>
          Depoimentos
        </div>
        <Slider />
      </div>
    </div>
  );
}

export default Depoimentos;
