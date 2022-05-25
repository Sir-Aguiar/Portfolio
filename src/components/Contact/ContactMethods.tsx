import React from "react";
import * as io from "react-icons/io";
import "../../styles/Contact/Contact.css";
const ContactMethods: React.FC = () => {
  return (
    <div className="contacts">
      <div className="method">
        <div className="logos">
          <io.IoLogoWhatsapp />
          <div>WhatsApp</div>
        </div>
        <div className="flex-1">(65) 99239-1561</div>
      </div>
      <div className="method">
        <div className="logos">
          <io.IoLogoLinkedin />
          <div>Linkedin</div>
        </div>
        <div className="flex-1">
          <a href="https://www.linkedin.com/in/felipe-aguiar-497651201/" target="_blank">
            Clique aqui
          </a>
        </div>
      </div>
      <div className="method">
        <div className="logos">
          <io.IoMdHeartDislike />
          <div>Email</div>
        </div>
        <div className="flex-1">
          <a href="mailto:felipeferreiraaguiar9@gmail.com" target="_blank" referrerPolicy="no-referrer">
            Clique aqui
          </a>
        </div>
      </div>
      <div className="method">
        <div className="logos">
          <io.IoLogoGithub />
          <div>Github</div>
        </div>
        <div className="flex-1">Sir Aguiar </div>
      </div>
    </div>
  );
};

export default ContactMethods;
