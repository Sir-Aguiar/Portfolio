import React from "react";
import { NavLink } from "../../styled/NavLink";
import "../../styles/Header/Navigation.css";
const Navigation: React.FC = () => {
  const ActivateNavigation = () => {
    const navigationLinks = document.querySelector(".navigation-links") as HTMLUListElement;
    const hamburger = document.querySelector(".hamburger") as HTMLDivElement;
    navigationLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  };
  return (
    <nav className="navigation">
      <div className="hamburger" onClick={ActivateNavigation}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className="navigation-links" onClick={ActivateNavigation}>
        <li>
          <NavLink href="#home">Início</NavLink>
        </li>
        <li>
          <NavLink href="#about">Sobre mim</NavLink>
        </li>
        <li>
          <NavLink href="#knowledges">Conhecimentos</NavLink>
        </li>
        <li>
          <NavLink href="#projects">Projetos</NavLink>
        </li>
        <li>
          <NavLink href="#contact">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
