import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const SlideGrid = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;

  @media screen and ${breakpoints.lg} {
    grid-template-rows: 1fr;
    // grid-template-columns: 41% 1fr;
    grid-template-columns: repeat(12, 1fr);
  }

  @media screen and ${breakpoints.xl} {
    grid-template-rows: 1fr;
  }
`;

export const SlideImg = styled.div`
  min-height: 238px;
  background: url(${(props) => props.mobileBg});
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  transition: all 0.4s ease 0.2s;

  @media screen and ${breakpoints.lg} {
    background: url(${(props) => props.desktopBg});
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    grid-column: 1 / 6;
  }

  @media screen and ${breakpoints.xl} {
    grid-column: 1 / 7;
  }
`;

export const ControlsContainer = styled.div`
  position: relative;

  @media screen and ${breakpoints.lg} {
    grid-column: 6 / 13;
  }

  @media screen and ${breakpoints.xl} {
    grid-column: 7 / 13;
  }
`;

export const SlideText = styled.div`
  padding: calc(6 * var(--padding-y)) 0;
  height: 100%;
  display: flex;
  align-items: center;

  .slide-header {
    font-weight: 600;
    color: var(--black);
    letter-spacing: -1.17px;
    font-size: 2.2em;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  .slide-body {
    margin-bottom: 5rem;
  }

  @media screen and ${breakpoints.lg} {
    .slide-header {
      margin-bottom: 2rem;
    }
  }
  @media screen and (min-width: 950px) {
    .slide-header {
      font-size: 3em;
    }
  }
`;

export const SlideControls = styled.div`
  height: 56px;
  width: 112px;
  background: var(--black);
  position: absolute;
  top: -56px;
  right: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-row: 1fr;

  .controls {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.4s ease;

    img {
      height: 1.4em;
      width: auto;
    }

    &:hover,
    &:focus {
      background: var(--grey-very-dark);
    }
  }

  @media screen and ${breakpoints.lg} {
    top: unset;
    bottom: 0;
    left: 0;
    height: 80px;
    width: 160px;
  }
`;

export const ShopNowText = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover,
  &:focus {
    h3 {
      color: var(--grey-dark);
    }
    svg {
      path {
        fill: var(--grey-dark);
      }
    }
  }

  h3,
  svg > path {
    transition: all 0.4s ease;
  }

  h3 {
    color: var(--black);
    font-weight: 500;
    letter-spacing: 10px;
    text-transform: uppercase;
    margin-right: 3rem;
  }
`;
