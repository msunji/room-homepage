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
  }

  body, html {
    overflow: hidden;
    height: 100vh;
    font-size: 12px;
    font-family: var(--sans-serif);
    font-weight: 500;
  }
`;

export default GlobalStyle;
