import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const SlidesContainer = styled(Container)`
  @media screen and ${breakpoints.lg} {
    width: 70%;
  }
`;

const Slide = ({
  header,
  body,
  mobileBg,
  desktopBg,
  handleNextClick,
  handlePrevClick,
  current,
}) => {
  return (
    <SlideGrid>
      <AnimatePresence exitBeforeEnter>
        <SlideImg
          key={current}
          as={motion.div}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 0.01,
            },
          }}
          exit={{
            opacity: 0,
          }}
          mobileBg={mobileBg}
          desktopBg={desktopBg}
        />
      </AnimatePresence>

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
          <AnimatePresence>
            <SlidesContainer
              as={motion.div}
              initial={{ opacity: 1 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                },
              }}
            >
              <h1 className="slide-header">{header}</h1>
              <p className="slide-body">{body}</p>
              <ShopNowText>
                <h3>Shop Now</h3>
                <ArrowRight />
              </ShopNowText>
            </SlidesContainer>
          </AnimatePresence>
        </SlideText>
      </ControlsContainer>
    </SlideGrid>
  );
};

export const Slides = () => {
  // console.log(slideContent);
  let [currentSlide, setCurrentSlide] = useState(0);
  let totalSlides = slideContent.length;

  // Button clickevents
  const handleNextClick = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };
  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setCurrentSlide(
          currentSlide === totalSlides - 1 ? 0 : currentSlide + 1
        );
      }
      if (e.key === "ArrowLeft") {
        setCurrentSlide(
          currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
        );
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [currentSlide, totalSlides]);

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
            className="current"
            current={currentSlide}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
          />
        ) : null
      )}
    </>
  );
};
