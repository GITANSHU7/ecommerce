import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import Delivery from "../Working/Delivery.png";
import Login from "../Working/Login.png";
import { Marginer } from "../Working/marginer";
import { OurSerivce } from "../Working/OurService";
import Payment from "../Working/Payment.png";
import { SectionTitle } from "../Working/sectionTitle";

import Select from "../Working/Select.png";



const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background: #fff;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Working of HYPEKAR</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Account"
        description="To order the product at Hypekar you must have a account on it . You can either create accpunt in signIn Section"
        imgUrl={Login}
      />
      <OurSerivce
        title="Select"
        description="Use filter and search option to choose the desired product and click Add to Cart or Buy Now Button ."
        imgUrl={Select}
        isReversed
      />
      <OurSerivce
        title="Payment"
        description="We only charge you the exact price of the product. Your payment details are safe with us"
        imgUrl={Payment}
      />
       <OurSerivce
        title="Delivery"
        description="We will notifie ones your product reached your locality . Ones order is placed it will be deliver to you in few days"
        imgUrl={Delivery}
        isReversed
      />
    </ServicesContainer>
  );
}

