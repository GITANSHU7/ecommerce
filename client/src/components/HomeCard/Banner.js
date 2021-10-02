import React from 'react'
import styled from "styled-components"


const Ban = styled.div`
 background-image: url("./images/cover.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vmin;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
`

const Heading  = styled.h1`
  margin: 5vmax;

  font: 600 2.5vmax "Roboto";
`;

const Para = styled.p`
font: 300 1.4vmax "Lucida Sans";
`;

const Anchor = styled.a`
 margin-bottom: 5vmax;
  cursor: pointer;
  background-color: white;
  border: 1px solid white;
  border-radius: 0;
  padding: 1vmax;
  transition: all 0.5s;
  width: 9vmax;
  font: 500 1vmax "Roboto";
&&hover{ 
background-color: rgba(255, 255, 255, 0);
  color: white;
}
`;

const Button = styled.button`
 margin-bottom: 5vmax;
  cursor: pointer;
  background-color: white;
  border: 1px solid white;
  border-radius: 0;
  padding: 1vmax;
  transition: all 0.5s;
  width: 9vmax;
  font: 500 1vmax "Roboto";
::hover{ 
background-color: rgba(255, 255, 255, 0);
  color: white;
}
`;



function Banner() {
    return (
<>
<Ban>
            <Para>Welcome to Ecommerce</Para>
            <Heading>FIND AMAZING PRODUCTS BELOW</Heading>

            <Anchor href="#container">
              <Button>
                Scroll 
              </Button>
            </Anchor>
          </Ban>

</>

    )

};

export default Banner;


