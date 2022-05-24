import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";

import "./styles/App.css";
const App: React.FC = () => {
  return (
    <div className="main-container">
      <section id="home" className="group-section">
        <Home />
      </section>
      <section id="about" className="group-section">
        <About />
      </section>
      <section id="knowledges" className="group-section"></section>
      <section id="projects" className="group-section"></section>
      <section id="contact" className="group-section"></section>
    </div>
  );
};

export default App;
