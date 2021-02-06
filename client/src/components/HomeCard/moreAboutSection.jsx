import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";


import AboutImgUrl from "../../pages/h.png";

import { SectionTitle } from "../Working/sectionTitle";

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 21px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
`;

const AboutImg = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;
  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
      <SectionTitle>About Hypekar</SectionTitle>
      <AboutContainer>
        <AboutText>
        <i className="fas fa-quote-left"></i> <br />At hypekar we believe in quality for all. We aim for providing best user experience in automobile industry {<br />}
          
          {<br />}With our platform you get excess to OEM products and essential services for your vehicle such as wheel-care , batteries, and insurance and much more all at one place
        </AboutText>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
    </MoreAboutContainer>
  );
}