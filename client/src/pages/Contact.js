
import React, { Component } from 'react'
import Jumbotron from '../components/cards/Jumbotron'
import AppContact from './contactForm'
import { Footer } from '../components/Working/footer';
import { ReviewsSection } from '../components/HomeCard/reviewSection';
import BrandList from '../components/brand/BrandList';
import styled from "styled-components";

const Divi = styled.div`

    min-height : 220px;
    @media screen and (max-width: 600px) {
        min-height : 130px; }
`;



export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <>
            <Divi className = "jumbotron text-warning h3 font-weight-bold text-center" style={{ 
      backgroundImage: `url("https://i.imgur.com/dimlmg7.png"  )`,   backgroundSize: "cover", height : "100%", 
      backgroundPosition: 'center center',  
      backgroundRepeat: 'no-repeat', 
    }}>
          <Jumbotron text={["24x7 Support", "Hassle free service", "Genuine Products"]} />
      
              </Divi>  

              <AppContact />
              
    
    <Footer />
              </>
        )
    }
}
