import React from "react";
import HeroSection from '../components/hero/HeroSection';
import '../App.css'
import Cards from '../components/HomeCard/Cards';
import Jumbotron from '../components/cards/Jumbotron';
import { ServicesSection } from "../components/HomeCard/serviceSection";
import { ReviewsSection } from "../components/HomeCard/reviewSection";
import { Footer } from "../components/Working/footer";
import AppFaq from "./faq";
import BrandList from "../components/brand/BrandList";
import ModelList from "../components/model/ModelList";
import styled from "styled-components";
import { NewsLetter } from "../components/subscribe";
import Banner from "../components/HomeCard/Banner";

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
{/*
    <ReviewsSection /> */}
    <AppFaq />
    
    <div style={{backgroundColor : "white"}}>

        <BrandList />
    </div>
    <div style={{backgroundColor : "white"}}>

        <ModelList />
    </div>
    <AppContainer>
      <NewsLetter />
    </AppContainer>
    <Footer />
        
            
            </>
    )
}

export default Home;