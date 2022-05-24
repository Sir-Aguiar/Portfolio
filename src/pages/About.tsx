import React from "react";
import "../styles/About/About.css";
const About: React.FC = () => {
  return (
    <div className="about-section">
      <div className="about-me">
        <h1>Um pouco sobre meu mundo</h1>
        <div className="about-cards">
          <div className="about-card">
            <p>Atuo como desenvolvedor há aproximadamente 1 ano, e me dediquei ao desenvolvimento de interfaces</p>
          </div>
          <div className="about-card">
            <p>
              Meus trabalhos são voltados a projetos de código aberto, e/ou pessoais. Mas estou aberto a ofertas
              profissionais.
            </p>
          </div>
          <div className="about-card">
            <p>Busco inovar e aprender coisas novas, massem sair da linha de especialização</p>
          </div>
          <div className="about-card">
            <p>Acredito que a tecnologia é a chave para o futuro brilhante que a humanidade sempre almejou</p>
          </div>
        </div>
      </div>
      <div className="about-ilustration">
        <img src="/development-process.png" />
      </div>
    </div>
  );
};

export default About;
