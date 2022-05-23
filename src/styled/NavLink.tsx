import React from "react";
import styled from "styled-components";

export const NavLink = styled.a`
  transition: 0.2s;
  filter: brightness(0.9);
  :hover {
    filter: brightness(1.2);
  }
  ::after {
    position: absolute;
    top: 105%;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: ".";
    color: transparent;
    background: linear-gradient(270deg, #6610f2 0%, #17161d 100%);
    background-color: rgba(0, 0, 0, 0);
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-attachment: scroll;
    background-image: linear-gradient(270deg, rgb(102, 16, 242) 0%, rgb(23, 22, 29) 100%);
    background-size: auto;
    background-origin: padding-box;
    height: 2px;
    transition: 0.3s ease-out;
  }

  :hover::after {
    width: 100%;
  }
`;
