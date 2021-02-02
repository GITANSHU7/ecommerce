import React from 'react'
import Jumbotron from "../components/cards/Jumbotron";



function About() {
    

    return (
        <>
          <div className = "jumbotron text-danger h1 font-weight-bold text-center">
          <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
      
              </div>  
        </>
    )
}

export default About