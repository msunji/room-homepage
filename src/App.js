import GlobalStyle from "../src/styles/globalStyle";
import breakpoints from "./styles/breakpoints";
import styled from "styled-components";
import { Slides } from "./components/slides/Slides.js";
import { About } from "./components/About";

const MainGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  @media screen and ${breakpoints.lg} {
    grid-template-rows: 66.7% auto;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainGrid>
        <Slides />
        <About />
      </MainGrid>
    </>
  );
}

export default App;
