import React from "react";
import "../../styles/Header/Header.css";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="filler"></div>
      <Navigation />
    </header>
  );
};

export default Header;
