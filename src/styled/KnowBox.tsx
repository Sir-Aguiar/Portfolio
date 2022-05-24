import React from "react";
import styled from "styled-components";

export const Box = styled.div`
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 6px;
  background-color: #0c225a;
  color: #9333ea;
  font-size: 18px;
  width: 100%;
  min-height: 106px;
  max-height: 130px;
  max-width: 130px;
  border-radius: 4px;
  font-family: "Poppins", "sans-serif";
  img {
    overflow: hidden;
    max-width: 70px;
    transition: all .3s;
  }
  align-self: center;
  justify-self: center;
  label {
    margin: 3px 0;
    transition: all .3s;
  }
  :hover label {
    transform: scale(1.2);
    
  }
  :hover img {
    transform: scale(1.05);
  }
`;
