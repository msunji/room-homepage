import styled from "styled-components";

export const SlideGrid = styled.section`
  display: grid;
  grid-template-rows: minmax(360px, 1.2fr) 1fr;
`;

export const SlideImg = styled.div`
  background: url(${(props) => props.mobileBg});
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
`;

export const ControlsContainer = styled.div`
  position: relative;
`;

export const SlideText = styled.div`
  padding: calc(5 * var(--padding-y)) 0;

  .slide-header {
    font-weight: 600;
    color: var(--black);
    letter-spacing: -1.17px;
    font-size: 2.3em;
    line-height: 1.11;
    margin-bottom: 1.5rem;
  }

  .slide-body {
    margin-bottom: 5rem;
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
`;

export const ShopNowText = styled.div`
  display: flex;
  align-items: center;

  h3 {
    color: var(--black);
    font-weight: 500;
    letter-spacing: 10px;
    text-transform: uppercase;
    margin-right: 3rem;
  }
`;
