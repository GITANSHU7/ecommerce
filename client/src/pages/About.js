import React from 'react'
import Jumbotron from "../components/cards/Jumbotron";
import { MoreAboutSection } from '../components/HomeCard/moreAboutSection';
import { Footer } from '../components/Working/footer';



function About() {
    

    return (
        <>
          <div className = "jumbotron text-danger h1 font-weight-bold text-center">
          <Jumbotron text={["Maintainance Kit", "Accessories", "OEM Parts"]} />
      
              </div>  
              <MoreAboutSection />
              <Footer />
        </>
    )
}

export default About