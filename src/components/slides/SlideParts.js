import styled from "styled-components";

export const SlideGrid = styled.section`
  display: grid;
  grid-template-rows: minmax(360px, 1.2fr) 1fr;
`;

export const SlideImg = styled.div`
  min-height: 360px;
  height: auto;
  background: var(--grey-dark);
`;

export const ImgControls = styled.div`
  position: relative;
`;

export const SlideText = styled.div`
  padding: calc(5 * var(--padding-y)) 0;

  h1 {
    font-weight: 600;
    color: var(--black);
    letter-spacing: -1.17px;
    font-size: 2.3em;
    line-height: 1.11;
    margin-bottom: 1.5rem;
  }
`;

export const SlideControls = styled.div`
  height: 56px;
  width: 112px;
  background: var(--black);
  position: absolute;
  bottom: 0;
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

    img {
      height: 1.4em;
      width: auto;
    }
  }
`;

export const ShopNowText = styled.div`
  h3 {
    color: var(--black);
    font-weight: 500;
    letter-spacing: 10px;
    text-transform: uppercase;
`;
