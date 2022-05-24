import React, { useState } from "react";
import "../styles/Knowledges/Knowledges.css";
import Know from "../../knowledges.json";
import { Box } from "../styled/KnowBox";
const Knowledges: React.FC = () => {
  const [currentKnow, setCurrentKnow] = useState<Know | null>(null);
  return (
    <div className="knowledges-section">
      <div className="know-boxes">
        {Know.Know.map((item, index) => (
          <Box
            key={index}
            onClick={() => {
              setCurrentKnow(item);
            }}
            onMouseEnter={() => {
              setCurrentKnow(item);
            }}
            onMouseLeave={() => {
              setCurrentKnow(null);
            }}
          >
            <img src={item.icon} />
            <label>{item.name}</label>
          </Box>
        ))}
      </div>
      <div className="know-description">
        <div className="description-box">
          <h1>{currentKnow ? currentKnow.name : ""}</h1>
          <p>{currentKnow ? currentKnow.description : "Passe o mouse ou clique em uma caixa"}</p>
        </div>
      </div>
    </div>
  );
};

export default Knowledges;
