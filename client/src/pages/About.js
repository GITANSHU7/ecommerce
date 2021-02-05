import React from 'react'
import Jumbotron from "../components/cards/Jumbotron";
import { MoreAboutSection } from '../components/HomeCard/moreAboutSection';



function About() {
    

    return (
        <>
          <div className = "jumbotron text-danger h1 font-weight-bold text-center">
          <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
      
              </div>  
              <MoreAboutSection />
        </>
    )
}

export default About