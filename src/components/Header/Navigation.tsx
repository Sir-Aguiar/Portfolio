import React from "react";
import "../../styles/Header/Navigation.css";
const Navigation: React.FC = () => {
  const ActivateNavigation = () => {
    const navigationLinks = document.querySelector(".navigation-links") as HTMLUListElement;
    navigationLinks.classList.toggle("active");
  };
  return (
    <nav className="navigation">
      <div className="hamburger" onClick={ActivateNavigation}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className="navigation-links">
        <li>
          <a href="#home">Início</a>
        </li>
        <li>
          <a href="#about">Sobre mim</a>
        </li>
        <li>
          <a href="#knowledges">Conhecimentos</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
