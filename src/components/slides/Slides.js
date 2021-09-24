import { useState } from "react";
import { Container } from "../layout/Container";
import { slideContent } from "../../content/slideContent";
import { ReactComponent as ArrowRight } from "./icon-arrow.svg";
import {
  SlideGrid,
  SlideImg,
  ControlsContainer,
  SlideText,
  SlideControls,
  ShopNowText,
} from "./SlideParts";

const Slide = ({
  header,
  body,
  mobileBg,
  desktopBg,
  handleNextClick,
  handlePrevClick,
}) => {
  return (
    <SlideGrid>
      <SlideImg mobileBg={mobileBg} desktopBg={desktopBg} />
      <ControlsContainer>
        <SlideControls>
          <div className="controls controls-left" onClick={handlePrevClick}>
            <img src="/img/layout/icon-angle-left.svg" alt="Click Left" />
          </div>
          <div className="controls controls-right" onClick={handleNextClick}>
            <img src="/img/layout/icon-angle-right.svg" alt="Click Right" />
          </div>
        </SlideControls>
        <SlideText>
          <Container>
            <h1 className="slide-header">{header}</h1>
            <p className="slide-body">{body}</p>
            <ShopNowText>
              <h3>Shop Now</h3>
              <ArrowRight />
            </ShopNowText>
          </Container>
        </SlideText>
      </ControlsContainer>
    </SlideGrid>
  );
};

export const Slides = () => {
  console.log(slideContent);

  let [currentSlide, setCurrentSlide] = useState(0);
  let totalSlides = slideContent.length;

  // Button clickevents
  const handleNextClick = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };
  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  return (
    <>
      {slideContent.map((slide, index) =>
        index === currentSlide ? (
          <Slide
            key={slide.id}
            header={slide.header}
            body={slide.body}
            desktopBg={slide.imgDesktop}
            mobileBg={slide.imgMobile}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
          />
        ) : null
      )}
    </>
  );
};
