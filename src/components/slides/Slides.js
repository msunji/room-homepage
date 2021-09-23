import { useState } from "react";
import { Container } from "../layout/Container";
import { slideContent } from "../../content/slideContent";
import {
  SlideGrid,
  SlideImg,
  ImgControls,
  SlideText,
  SlideControls,
  ShopNowText,
} from "./SlideParts";

const Slide = ({ header, body }) => {
  let [currentSlide, setCurrentSlide] = useState(0);
  let totalSlides = slideContent.length;

  // Button clickevents
  const handleNextClick = () => {
    let current = currentSlide;
    console.log("fire next");
  };
  const handlePrevClick = () => {
    console.log("fire prev");
  };

  return (
    <SlideGrid>
      <ImgControls>
        <SlideImg />
        <SlideControls>
          <div className="controls controls-left" onClick={handlePrevClick}>
            <img src="/img/layout/icon-angle-left.svg" alt="Click Left" />
          </div>
          <div className="controls controls-right" onClick={handleNextClick}>
            <img src="/img/layout/icon-angle-right.svg" alt="Click Right" />
          </div>
        </SlideControls>
      </ImgControls>

      <SlideText>
        <Container>
          <h1>{header}</h1>
          <p>{body}</p>
          <ShopNowText>Shop Now</ShopNowText>
        </Container>
      </SlideText>
    </SlideGrid>
  );
};

export const Slides = () => {
  console.log(slideContent);
  return (
    <>
      {/* <Slide /> */}
      {slideContent.map((slide, index) => (
        <Slide key={slide.id} header={slide.header} body={slide.body} />
      ))}
    </>
  );
};
