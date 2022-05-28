import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Projects from "./pages/Projects";

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
      <section id="knowledges" className="group-section">
        <Knowledges />
      </section>
      <section id="projects" className="group-section">
        <Projects />
      </section>
      <section id="contact" className="group-section">
        <Contact />
      </section>
    </div>
  );
};

export default App;
