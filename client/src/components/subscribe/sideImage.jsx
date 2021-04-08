import React from "react";
import styled from "styled-components";

import subscribe from "./subscribe.png";

const SideImageContainer = styled.div`
  max-width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  background: rgb(148, 147, 247);
  background: linear-gradient(
    217deg,
    rgba(148, 147, 247, 1) 0%,
    rgba(210, 194, 221, 1) 100%
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
  
  @media screen and (max-width: 480px) {
    width: 18em;
    height: 13em;
  }
`;

const Image = styled.div`
  width: auto;
  height: 30em;
  img {
    width: auto;
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 18em;
    height: 13em;
  }
`;

export function SideImage(props) {
  return (
    <SideImageContainer>
      <Image>
        <img src={subscribe} />
      </Image>
    </SideImageContainer>
  );
}