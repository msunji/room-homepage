import styled from "styled-components";
import { Container } from "./layout/Container";

const AboutSection = styled.section``;

const AboutGrid = styled.div`
  display: grid;
  grid-template-rows: minmax(238px, auto) 1fr minmax(227px, 1fr);
`;

const AboutDark = styled.div`
  width: 100%;
  min-height: 238px;
  background: url("/img/image-about-dark.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const AboutLight = styled.div`
  width: 100%;
  min-height: 227px;
  background: url("/img/image-about-light.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const AboutContainer = styled(Container)`
  padding: calc(5 * var(--padding-y)) 0;
  h2 {
    margin-bottom: 0.75rem;
  }
`;

export const About = () => {
  return (
    <AboutSection>
      <AboutGrid>
        <AboutDark />
        <AboutContainer>
          <h2>About our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </AboutContainer>
        <AboutLight />
      </AboutGrid>
    </AboutSection>
  );
};
