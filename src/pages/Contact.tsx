import React, { useEffect } from "react";
import ContactMethods from "../components/Contact/ContactMethods";
import "../styles/Contact/Contact.css";
const Contact: React.FC = () => {
  return (
    <div className="contact-section">
      <h1>Vamos conversar sobre seu projeto!</h1>
      <h2>Coloque aquela ideia em prática!</h2>
      <ContactMethods />
    </div>
  );
};

export default Contact;
