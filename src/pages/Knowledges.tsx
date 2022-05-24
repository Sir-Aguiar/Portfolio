import React, { useState } from "react";
import "../styles/Knowledges/Knowledges.css";
import Know from "../../knowledges.json";
import { Box } from "../styled/KnowBox";
const Knowledges: React.FC = () => {
  const [currentKnow, setCurrentKnow] = useState<Knows>("");
  return (
    <div className="knowledges-section">
      <div className="know-boxes">
        {Know.Know.map((item) => (
          <Box>
            <img src={item.icon} />
            <label>{item.name}</label>
          </Box>
        ))}
      </div>
      <div className="know-description"></div>
    </div>
  );
};

export default Knowledges;
