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


 function Home() {
    


    return (
        <>
            <HeroSection />
            <Cards />
            
    <ServicesSection />
    <ReviewsSection />
    <AppFaq />
    
    <div style={{backgroundColor : "white"}}>

        <BrandList />
    </div>
    <Footer />
        
            
            </>
    )
}

export default Home;