import React from "react";
import HeroSection from '../components/hero/HeroSection';
import '../App.css'
import Cards from '../components/HomeCard/Cards';
import Jumbotron from '../components/cards/Jumbotron';
import { ServicesSection } from "../components/HomeCard/serviceSection";
import { ReviewsSection } from "../components/HomeCard/reviewSection";
import { Footer } from "../components/Working/footer";


 function Home() {
    


    return (
        <>
            <HeroSection />
            <Cards />
            
    <ServicesSection />
    <ReviewsSection />
    <Footer />
        
            
            </>
    )
}

export default Home;