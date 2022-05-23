import React from "react";
import "../styles/Home/Home.css";
const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="welcome">
        <h1>
          Olá, eu sou
          <br />
          Felipe Aguiar
        </h1>
        <h2>Desenvolvedor front-end</h2>
        <a href="#about">
          <button>Descubra sobre mim</button>
        </a>
      </div>
      <div className="ilustration">
        <img src="./developing-site.png"/>
      </div>
    </div>
  );
};

export default Home;
