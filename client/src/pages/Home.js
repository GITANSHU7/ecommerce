import React from "react";
import styled from "styled-components";
import '../App.css';
import HeroSection from '../components/hero/HeroSection';
import Cards from '../components/HomeCard/Cards';
import { ServicesSection } from "../components/HomeCard/serviceSection";
import { NewsLetter } from "../components/subscribe";
import { Footer } from "../components/Working/footer";
import AppFaq from "./faq";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction : row;
  justify-content: center;
  background: rgb(254, 193, 130);
  background: linear-gradient(
    50deg,
    rgba(254, 193, 130, 1) 20%,
    rgba(254, 160, 142, 1) 100%
  );
`;

 function Home() {
    return (
        <>
     <HeroSection />
            {/* <Banner /> */}
            <Cards /> 
    <ServicesSection />
{/*<ReviewsSection /> */}
    <AppFaq />
    {/* <div style={{backgroundColor : "white"}}>
    <BrandList />
    </div>
    <div style={{backgroundColor : "white"}}>
    <ModelList />
    </div> */}
    <AppContainer>
    <NewsLetter />
    </AppContainer>
    <Footer />    
    </>
    )
}

export default Home;