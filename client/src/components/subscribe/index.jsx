import React from "react";
import styled from "styled-components";
import { Details } from "./details";
import { SideImage } from "./sideImage";

const CardContainer = styled.div`
  width: 1100px;
  height: 500px;
  display: flex;
  border-radius: 26px;
  position: relative;
  border: 2px solid #fff;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  
  @media screen and (max-width: 1000px){
    display : none ;
  }
  
`;

export function NewsLetter(props) {
  return (
    <CardContainer>
      <Details />
      <SideImage />
    </CardContainer>
  );
}