import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import User1Img from "./profile_picture_1.jpeg";


import { useMediaQuery } from "react-responsive";

import "pure-react-carousel/dist/react-carousel.es.css";



import { Marginer } from "../Working/marginer";
import { ReviewCard } from "../Working/reviewCard";
import { SectionTitle } from "../Working/sectionTitle";

const ReviewsContainer = styled(Element)`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }
  .carousel__dot--selected {
    background-color: #c4c4c4;
  }
`;

export function ReviewsSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <ReviewsContainer>
      <SectionTitle>What others are saying about us</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 250 : 205}
        totalSlides={4}
        visibleSlides={isMobile ? 1 : 2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl={User1Img}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl={User1Img}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl={User1Img}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl={User1Img}
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}