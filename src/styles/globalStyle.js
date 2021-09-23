import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  :root {
    --grey-dark: hsl(0, 0%, 63%);
    --grey-very-dark: hsl(0, 0%, 27%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);
    --sans-serif: "Spartan", sans-serif;
    --padding-y: 1rem;
    --padding-x: 1rem;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body, html {
    overflow: hidden;
    height: 100vh;
    font-size: 12px;
    font-family: var(--sans-serif);
    font-weight: 500;
  }

  h2 {
    color: var(--black);
    line-height: 1.83;
    font-weight: 700;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
  p {
    color: var(--grey-dark);
    line-height: 1.6;
    letter-spacing: -0.25px;
  }
`;

export default GlobalStyle;
