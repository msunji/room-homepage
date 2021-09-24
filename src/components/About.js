import styled from "styled-components";
import breakpoints from "../styles/breakpoints";
import { Container } from "./layout/Container";

const AboutGrid = styled.div`
  display: grid;
  grid-template-rows: minmax(238px, auto) 1fr minmax(227px, auto);

  @media screen and ${breakpoints.lg} {
    grid-template-rows: 1fr;
    grid-template-columns: 1.5fr 2fr 1.5fr;
  }
`;

const AboutDark = styled.div`
  width: 100%;
  background: url("/img/image-about-dark.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const AboutLight = styled.div`
  width: 100%;
  background: url("/img/image-about-light.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(5 * var(--padding-y)) 0;
  h2 {
    margin-bottom: 0.75rem;
  }
`;

export const About = () => {
  return (
    <AboutGrid>
      <AboutDark />
      <AboutContainer>
        <h2>About our furniture</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </AboutContainer>
      <AboutLight />
    </AboutGrid>
  );
};
