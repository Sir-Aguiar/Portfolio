import React from "react";

import "./styles/App.css";
const App: React.FC = () => {
  return (
    <div className="main-container">
      
      <section id="home" className="group-section"></section>
      <section id="about" className="group-section"></section>
      <section id="knowledges" className="group-section"></section>
      <section id="projects" className="group-section"></section>
      <section id="contact" className="group-section"></section>
    </div>
  );
};

export default App;
