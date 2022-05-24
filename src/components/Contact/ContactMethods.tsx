import React from "react";
import * as io from "react-icons/io";
import "../../styles/Contact/Contact.css";
const ContactMethods: React.FC = () => {
  return (
    <div className="contacts">
      <div className="method">
        <div className="logos">
          <io.IoLogoWhatsapp />
          <span>WhatsApp</span>
        </div>
        <span>(65) 99239-1561</span>
      </div>
      <div className="method">
        <div className="logos">
          <io.IoLogoLinkedin />
          <span>Linkedin</span>
        </div>
        <a href="https://www.linkedin.com/in/felipe-aguiar-497651201/" target="_blank">
          Clique aqui
        </a>
      </div>
      <div className="method">
        <div className="logos">
          <io.IoMdHeartDislike />
          <span>Email</span>
        </div>
        <a href="mailto:felipeferreiraaguiar9@gmail.com" target="_blank" referrerPolicy="no-referrer">
          felipeferreiraaguiar9@gmail.com (ou clique aqui)
        </a>
      </div>
      <div className="method">
        <div className="logos">
          <io.IoLogoGithub />
          <span>Github</span>
        </div>
        <span>Sir Aguiar (ou clique no ícone)</span>
      </div>
    </div>
  );
};

export default ContactMethods;
